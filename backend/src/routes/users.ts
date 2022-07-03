import express from 'express'
import { addUser, getUsers, verifyLogin, getFirstTen } from '../services/usersService'

const router = express.Router()

router.post('/login', async (req, res) => {
    await verifyLogin(req, res)
})

router.get('/', async (req, res) => {
    await getUsers(req, res)
    .then(users => {
        res.status(200)
        .send(users)
    })
})

router.post('/', async (req, res) => {
    await addUser(req, res)
})

export default router

router.get('/top', async (req, res) => {
    await getFirstTen(req, res)
})