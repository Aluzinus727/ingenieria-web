import express from 'express'
import { addUser, getUsers, verifyLogin } from '../services/usersService'

const router = express.Router()

router.post('/login', async (req, res) => {
    await verifyLogin(req, res)
})

router.get('/', async (req, res) => {
    await getUsers(req, res)
    .then(users => {
        console.log(users)

        res.status(200)
        .send(users)
    })
})

router.post('/', async (req, res) => {
    await addUser(req, res)
})

// router.get('/:rut', (req, res) => {
//     const user = userServices.findUserByRut(req.params.rut)

//     return (user !== undefined) ? res.json(user) : res.sendStatus(404)
// })

// router.post('/', (req, res) => {
//     const { rut, first_name, last_name, role, password } = req.body

//     const newUser = userServices.addUser({
//         rut,
//         first_name,
//         last_name,
//         role,
//         password
//     })

//     res.send(newUser)
// })

export default router