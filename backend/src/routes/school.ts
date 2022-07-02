import express from 'express'
import { addSchool, getSchools, deleteSchool, modifySchool } from '../services/schoolService'

const router = express.Router()

router.put('/', async (req, res) => {
    await addSchool(req, res)
})

router.get('/', async (req, res) => {
    await getSchools(req, res)
})

router.delete('/:schoolName', async (req, res) => {
    await deleteSchool(req, res)
})

router.post('/', async (req, res) => {
    await modifySchool(req, res)
})

export default router