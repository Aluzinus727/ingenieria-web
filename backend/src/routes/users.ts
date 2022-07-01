import express from 'express'
import { addUser, getUsers, getUsersByPage, verifyLogin } from '../services/usersService'

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

router.get('/:page', async (req, res) => {
    if (req.params.page) {
        const page: number = +req.params.page
        await getUsersByPage(req, res, page)
    } else {
        res.status(500).send()
    }
})

router.post('/', async (req, res) => {
    await addUser(req, res)
})

export default router