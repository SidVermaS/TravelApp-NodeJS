import Group from '../models/Group.js'

export const addAdmin=async (req, res)=>    {
    try {
        const { _id, admin_id }=req.body

        const updatedGroup=await Group.findByIdAndUpdate(_id, 
            {
                $addToSet:  {
                    admin_ids: admin_id
                }
            }
        )   
        return res.status(200).json({ group: updatedGroup, message: 'Successfully added the admin' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the admin' })
    }
}

export const deleteAdmin=async (req, res)=>    {
    try {
        const { _id, admin_id }=req.body

        const updatedGroup=await Group.findByIdAndUpdate(_id, 
            {
                $pull:  {
                    admin_ids: admin_id
                }
            }
        )   
        return res.status(200).json({ group: updatedGroup, message: 'Successfully deleted the admin' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to deleted the admin' })
    }
}
