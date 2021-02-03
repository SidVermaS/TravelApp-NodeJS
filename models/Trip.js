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
    status: {
        type: Number,
        required: true,
        default: 0
    },
    admin_id:   {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    attendee_ids:   {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'profiles'
            }
        ],
        default: []
    },
    cost:   {
        type: Number,
        required: true,
    }
})

export default mongoose.model('trips', TripSchema)