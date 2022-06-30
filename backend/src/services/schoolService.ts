import { pool } from "../database"
import { User } from "../types"

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