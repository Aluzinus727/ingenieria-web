import express from 'express'
import { addSchool } from '../services/schoolService'

const router = express.Router()

router.put('/', async (req, res) => {
    await addSchool(req, res)
})

export default router