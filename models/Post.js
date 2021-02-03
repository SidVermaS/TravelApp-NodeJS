import mongoose from 'mongoose'

const PostSchema=({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    caption:    {
        type: String,
    },
    photo_urls:  {
        type: String,
        required: true
    },
    place_id:   {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'places'
    },
    profile_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'profiles'
    }
})

export default mongoose.model('posts', PostSchema)