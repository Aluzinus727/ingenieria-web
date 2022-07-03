import { pool } from "../database"
import { User } from "../types"

export const getSchools = async(_req: any, res: any) => {
    try {
        const users = await pool.query('SELECT school.name AS school_name, user.rut, user.name, user.last_name FROM school LEFT JOIN user ON school.director_rut = user.rut')
        res.status(200).send(users)
    } catch {
        res.status(401).send()
     }
    }

export const modifySchool = async(req: any, res: any) => {
    try {
        const result = await pool.query<User[]>('SELECT * FROM user WHERE rut = ?', [req.body.director])
        const user = result[0][0]

        if (user.role === '1') {
            await pool.query('UPDATE school SET director_rut = ? WHERE name = ?', [req.body.director, req.body.name])
            res.status(200).send()
        } else {
            res.status(500).send()
        }
    } catch {
        res.status(401).send()
    }
}

export const deleteSchool = async(req: any, res: any) => {
    try {
        await pool.query('DELETE FROM school WHERE name = ?', [req.params.schoolName])
        res.status(200).send()
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
            res.status(201).send( { name: user.name, last_name: user.last_name, rut: user.rut } )
        } else {
            res.status(500).send()
        }
    } catch {
        res.status(500).send({"error": "error"})
    }
}

export const getFirstTen = async (_req: any, res: any) => {
    const result = await pool.query("SELECT mydb.school.name, mydb.school.director_rut, mydb.user.name AS first_name, mydb.user.last_name FROM mydb.school LEFT JOIN mydb.user ON mydb.school.director_rut = mydb.user.rut LIMIT 10")

    if (result && result[0]) {
        console.log(result[0])
        res.status(200).send(result[0])
    }
}