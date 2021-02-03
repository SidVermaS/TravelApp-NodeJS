import express from 'express'
import { addPost, updatePost, deletePost } from '../controllers/post.js'

const router=express.Router()

router.post('/',addPost)
router.patch('/',updatePost)
router.delete('/',deletePost)

export default router