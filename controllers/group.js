import Group from '../models/Group.js'
import { uploadSinglePhoto, uploadMultiplePhotos } from './upload.js'

export const addGroup=async (req, res)=> {
    try {
        const photo_url=await uploadSinglePhoto(req)
        const { title }=req.body
        
        const group=new Group({
            title, photo_url
        })
        const savedGroup=await group.save()        
        return res.status(200).json({ group: savedGroup, message: 'Successfully added the group' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the group' })
    }
}

export const updateGroup=async (req, res)=> {
    try {
        const { _id, title }=req.body
        const updatedGroup=await Group.findByIdAndUpdate(_id, { title }, { new: false })
        return res.status(200).json({ group: updatedGroup, message: 'Successfully updated the group' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to updated the group' })
    }
}


export const addMember=async (req, res)=>    {
    try {
        const { _id, member_id }=req.body

        const updatedGroup=await Group.findByIdAndUpdate(_id, 
            {
                $addToSet:  {
                    member_ids: member_id
                }
            }
        )   
        return res.status(200).json({ group: updatedGroup, message: 'Successfully added the member' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the member' })
    }
}

export const deleteMember=async (req, res)=>    {
    try {
        const { _id, member_id }=req.body

        const updatedGroup=await Group.findByIdAndUpdate(_id, 
            {
                $pull:  {
                    member_ids: member_id
                }
            }
        )   
        return res.status(200).json({ group: updatedGroup, message: 'Successfully deleted the member' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to deleted the member' })
    }
}