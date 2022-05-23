import jwt from "jsonwebtoken"

const ACCESS_TOKEN = '46899820d7d4ecc1fdddd2e15721734dbbf6a28faaec0bc565c8a7530d53d1511903fa9ee50aa87e9934bea0259c8db34c259903c2a07d53144d329045808141'

export const verifyToken = (token: string) => {
    try {
        if (jwt.verify(token, ACCESS_TOKEN)) {
            return true
        }
    } catch {
        return false
    }
}

export const verifyRole = (req: any, res: any) => {
    const token = req.body.token
    const role = req.body.role

    if ( verifyToken(token) ) {
        const userInfo: any = jwt.decode(token)
        console.log(userInfo, role)
        if (userInfo && userInfo['role'] === role)  {
            res.send( { auth: true } )
        } else {
            res.send( { auth: false } )
        }
    } else {
        res.sendStatus(401)
    }
}