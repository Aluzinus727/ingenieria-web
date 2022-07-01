import { pool } from "../database"
import { User } from "../types"

// export const getSchoolsByPage = async(_res: any, res: any, page: number) => {
//     const schools_per_page = 3
//     const offset = (schools_per_page * page) - schools_per_page

//     try {
//         const users = await pool.query('SELECT school.name AS school_name, user.rut, user.name, user.last_name FROM school LEFT JOIN user ON school.director_rut = user.rut LIMIT ? OFFSET ?', [schools_per_page, offset])
//         console.log(users, schools_per_page, offset)
//         res.status(200).send(users)
//     } catch {
//         res.status(401).send()
//     }
// }

export const getSchools = async(_res: any, res: any) => {
    try {
        const users = await pool.query('SELECT school.name AS school_name, user.rut, user.name, user.last_name FROM school LEFT JOIN user ON school.director_rut = user.rut')
        console.log(users)
        res.status(200).send(users)
    } catch {
        res.status(401).send()
     }
    }

export const addSchool = async (req: any, res: any) => {
    try {
        const school = {
            name: req.body.name,
            director_rut: req.body.director
        }

        const result = await pool.query<User[]>(
            "SELECT * FROM user WHERE rut = ?", 
            [req.body.director])
        const user = result[0][0]
        
        // Si es que el RUT ingresado existe y es un Admin Local.
        if (user && user.role == "1") {
            await pool.query('INSERT INTO school SET ?', [school])
            res.status(201).send()
        } else {
            res.status(500).send()
        }
    } catch {
        res.status(500).send()
    }
}