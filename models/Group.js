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
    photo_url:  {
        type: String,
    },
    admin_ids: {
        type: Array,
        required: true,  
        unique: true      
    },
    member_ids: {
        type: Array,
        required: true,
        unique: true,
    }
})

export default mongoose.model('groups', GroupSchema)