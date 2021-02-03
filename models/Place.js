import mongoose from 'mongoose'

const PlaceSchema=mongoose.Schema({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:  {
        type: String,
        required: true
    },
    latitude:   {
        type: Number,
        required: true
    },
    longitude:  {
        type: Number,
        required: true
    },
    photos: {
        type: Array,
        required: false
    },
    no_of_trips:    {
        type: Number,
        required: true
    }
})

export default mongoose.model('places', PlaceSchema)