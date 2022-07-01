import express from 'express'
import { addSchool, getSchools } from '../services/schoolService'

const router = express.Router()

router.put('/', async (req, res) => {
    await addSchool(req, res)
})

router.get('/', async (req, res) => {
    await getSchools(req, res)
})

// router.get('/:page', async (req, res) => {
//     if (req.params.page) {
//         const page: number = +req.params.page
//         await getSchoolsByPage(req, res, page)
//     } else {
//         res.status(500).send()
//     }
// })

export default router