import express from 'express'
import { addGroup, updateGroup } from '../controllers/group.js'

const router=express.Router()

router.post('/',addGroup)
router.patch('/',updateGroup)

export default router