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
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'profiles'
            }
        ],
        default: [],     
    },
    member_ids: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'profiles'
            }
        ],
        default: []
    }
})

export default mongoose.model('groups', GroupSchema)