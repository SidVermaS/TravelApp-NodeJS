import express from 'express'
import { addPlace, updatePlace } from '../controllers/place.js'

const router=express.Router()

router.post('/',addPlace)
router.patch('/',updatePlace)

export default router