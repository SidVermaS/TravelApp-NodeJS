import Group from '../models/Group.js'

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