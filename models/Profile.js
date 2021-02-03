import mongoose from 'mongoose'

const ProfileSchema=mongoose.Schema({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:   {
        type: String,
        required: true
    },
    username:   {
        type: String,
        required: true
    },
    password:   {
        type: String,
        required: true
    },
    photo_url:  {
        type: String,
        required: false
    },
    mobile_no:  {
        type: Number,
        required: true,
        unique: true
    },
    balance:    {
        type: Number,
        required: true,
        default: 0
    }
})

export default mongoose.model('profiles', ProfileSchema)