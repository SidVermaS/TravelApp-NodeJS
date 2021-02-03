import Post from '../models/Post.js'
import { uploadMultiplePhotos } from './upload.js'

export const addPost=async (req, res)=> {
    try {
        const { caption, place_id, profile_id }=req.body
        let photo_urls=await uploadMultiplePhotos(req, 'post')
        const post=new Post({
            caption, photo_urls, place_id, profile_id
        })
        const savedPost=await post.save()        
        return res.status(200).json({ post: savedPost, message: 'Successfully added the post' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the post' })
    }
}

export const updatePost=async (req, res)=> {
    try {
        const { _id, caption }=req.body
        const updatedPost=await Post.findByIdAndUpdate(_id, { caption }, { new: false })
        return res.status(200).json({ place: updatedPost, message: 'Successfully updated the post' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to updated the post' })
    }
}

export const deletePost=async (req, res)=>  {
    try {
        const { _id }=req.body
        const removedPost=await Post.findByIdAndRemove(_id)
        return res.status(200).json({ post: removedPost, message: 'Successfully deleted the post' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to deleted the post' })
    }
}