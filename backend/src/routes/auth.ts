import express from 'express'
import { verifyRole } from '../services/authServices'

const router = express.Router()

router.post('/session', async (req, res) => {
    verifyRole(req, res)
})

export default router