import Trip from '../models/Trip.js'

export const addTrip=async (req, res)=> {
    try {
        const { group_id, admin_id, place_id, start_date, end_date, cost }=req.body
        const trip=new Trip({
            group_id, admin_id, place_id, start_date, end_date, cost
        })
        const savedTrip=await trip.save()        
        return res.status(200).json({ trip: savedTrip, message: 'Successfully added the trip' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the trip' })
    }
}

export const updateTrip=async (req, res)=> {
    try {
        const { _id, place_id, start_date, end_date, cost }=req.body
        const trip=new Trip({
            place_id, start_date, end_date, cost
        })
        const updatedTrip=await Trip.findByIdAndUpdate(_id, trip)        
        return res.status(200).json({ trip: updatedTrip, message: 'Successfully updated the trip' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to updated the trip' })
    }
}

export const joinTrip=async (req, res)=>  {
    try {
        const { _id, profile_id }=req.body
        const trip=new Trip({
            group_id, admin_id, place_id, start_date, end_date, cost
        })
        const updatedTrip=await Trip.findByIdAndUpdate(_id, {
            $addToSet:  {
                attendee_ids: profile_id
            }
        })       
        return res.status(200).json({ trip: updatedTrip, message: 'Successfully joint the trip' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to join the trip' })
    }
}

export const leaveTrip=async (req, res)=>    {
    try {
        const { _id, profile_id }=req.body

        const updatedTrip=await Trip.findByIdAndUpdate(_id, 
            {
                $pull:  {
                    attendee_ids: profile_id
                }
            }
        )   
        
        return res.status(200).json({ trip: updatedTrip, message: 'Successfully left the trip' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to leave the trip' })
    }
}