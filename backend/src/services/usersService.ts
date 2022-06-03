import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// import { User } from '../types'
import { pool } from '../database'

const ACCESS_TOKEN = '46899820d7d4ecc1fdddd2e15721734dbbf6a28faaec0bc565c8a7530d53d1511903fa9ee50aa87e9934bea0259c8db34c259903c2a07d53144d329045808141'

const users = [
    {
        "rut": "19776112",
        "first_name": "Angelo",
        "last_name": "Alvear",
        "password": "$2b$10$YNMVEHQ/PZkiSoISCrpszufsbipm6YEdX1.jwpk2mjYMOzZekG7oi",
        "role": 0  // Admin total
    },
    {
        "rut": "12345678",
        "first_name": "Michelle",
        "last_name": "Blanco",
        "password": "$2b$10$TkqQIWfWZxjYH02HyH8LfOK8unsMtuUxtBbg4/m1MrMwguXUJP2FG",
        "role": 1 // Admin de institución
    },
    {
        "rut": "20100200",
        "first_name": "Lucio",
        "last_name": "Roldan",
        "password": "$2b$10$Nui/0lKNkIA6R12f6FZh3.KBvGS5xSufwGi62SvEUe2Dx5J1vljJa",
        "role": 2 // Profesor
    },
    {
        "rut": "17200300",
        "first_name": "Abel",
        "last_name": "Orozco",
        "password": "$2b$10$t1Z864AgteKdEpIA3tPlCOvAo3xV6gABfvj6Z/uNIxruEShk5CSG.",
        "role": 3, // Estudiante
        "school": "Colegio Bicentenario",
        "course": "4° Medio"
    }
]

export const getUsers = async (_req: any, res: any) => {
    // TODO: Verificar jwt
    try {
        const users = await pool.query('SELECT * FROM users')
        return users[0] 
    } catch {
        res.status(500).send()
    }
}

export const addUser = async (req: any, res: any) => {
    // TODO: Verificar jwt
    try {
        const user = {
            rut: req.body.rut,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: await bcrypt.hash(req.body.password, 10),
            role: req.body.role
        }

        pool.query('INSERT INTO users SET ?', [user])
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}

// export const findUserByRut = (rut: string): SafeUser | undefined => {
//     const user = users.find(u => u.rut === rut)
//     if (user !== undefined) {
//         const { password, ... userInfo } = user
//         return userInfo
//     }
    
//     return user
// }

export const verifyLogin = async (req: any, res: any) => {
    // NO DATABASE LOGIN
    const user = users.find(u => u.rut === req.body.rut)
    if (!user) 
        return

    try {
        if (!await bcrypt.compare(req.body.password, user['password'])) {
            res.json( { error: "Invalid login details." } )
            return 
        }

        const {password, ... userSession} = user
        const accessToken = jwt.sign(userSession, ACCESS_TOKEN, {expiresIn: "1w"})

        res.json( { session: userSession, accessToken: accessToken} )
    } catch {
        res.json( { error: "Invalid login details." } )
    }

    // DATABASE LOGIN
    // TODO: Sanitizar parametros
    // const result = await pool.query(
    //     "SELECT * FROM users WHERE rut = ?", 
    //     [req.body.rut])
    // const user = result[0][0 as keyof typeof result[0]]

    // try {
    //     if (!await bcrypt.compare(req.body.password, user['password'])) {
    //         res.json( { error: "Invalid login details." } )
    //         return 
    //     }
    //     const userSession = {
    //         rut: user['rut'],
    //         first_name: user['first_name'],
    //         last_name: user['last_name'],
    //         password: user['password'],
    //         role: user['ROLE']
    //     }

    //     const accessToken = jwt.sign(userSession, ACCESS_TOKEN)
    //     const {password, ... userInfo} = userSession

    //     res.json( {session: userInfo, accessToken: accessToken} )
    // } catch {
    //     res.json( { error: "Invalid login details." } )
    // }
}

// export const autenthicateToken = (req: any, res: any, next: any) => {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, ACCESS_TOKEN, (err: any, user: any) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }