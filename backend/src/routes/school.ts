import express from 'express'
import { addSchool, getSchools, deleteSchool, modifySchool, getFirstTen } from '../services/schoolService'

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

router.get('/top', async (req, res) => {
    await getFirstTen(req, res)
})

export default router