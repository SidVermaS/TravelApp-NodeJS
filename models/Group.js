import mongoose from 'mongoose'

const GroupSchema=({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:  {
        type: String,
        required: true,
    },
    admin_ids: {
        type: Array,
        required: true,        
    },
    member_ids: {
        type: Array,
        required: true
    }
})

export default mongoose.model('groups', GroupSchema)