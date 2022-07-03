import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { pool } from '../database'
import { User } from "../types"

const ACCESS_TOKEN = '46899820d7d4ecc1fdddd2e15721734dbbf6a28faaec0bc565c8a7530d53d1511903fa9ee50aa87e9934bea0259c8db34c259903c2a07d53144d329045808141'

export const getUsers = async (_req: any, res: any) => {
    // TODO: Verificar jwt
    try {
        const users = await pool.query('SELECT * FROM user ORDER BY role ASC')
        return users[0] 
    } catch {
        res.status(401).send()
    }
}

export const getUsersByPage = async(_res: any, res: any, page: number) => {
    const users_per_page = 3
    const offset = (users_per_page * page) - users_per_page

    try {
        const users = await pool.query('SELECT * FROM user LIMIT ? OFFSET ?', [users_per_page, offset])
        res.status(200).send(users)
    } catch {
        res.status(401).send()
    }
}

export const addUser = async (req: any, res: any) => {
    // TODO: Verificar jwt
    try {
        const user = {
            rut: req.body.rut,
            name: req.body.name,
            last_name: req.body.last_name,
            password: await bcrypt.hash(req.body.password, 10),
            role: req.body.role
        }

        await pool.query('INSERT INTO user SET ?', [user])
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}

export const verifyLogin = async (req: any, res: any) => {
    //TODO: Sanitizar parametros
    const result = await pool.query<User[]>(
        "SELECT * FROM user WHERE rut = ?", 
        [req.body.rut])
    const user = result[0][0]

    try {
        if (!await bcrypt.compare(req.body.password, user['password'])) {
            res.json( { error: "Invalid login details." } )
            return 
        }

        const {password, ... userSession} = user
        const accessToken = jwt.sign(userSession, ACCESS_TOKEN, {expiresIn: "1w"})

        res.json( {session: userSession, accessToken: accessToken} )
    } catch {
        res.json( { error: "Invalid login details." } )
    }
}

export const getFirstTen = async (_req: any, res: any) => {
    try {
        const result = await pool.query("SELECT rut, name, last_name, role FROM user ORDER BY role asc LIMIT 10")

        if (result && result[0]) {
            res.status(200).send(result[0])
        }
    } catch(e) {
        res.status(500).send(e)
    }
}