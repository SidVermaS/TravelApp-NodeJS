import mongoose from 'mongoose'

const TripSchema=({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    place_id:   {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'places'
    },
    group_id:   {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'groups'
    },
    start_date:    {
        type: Date,
        required: true,
    },
    end_date:   {
        type: Date,
        required: true
    },
})

export default mongoose.model('trips', TripSchema)