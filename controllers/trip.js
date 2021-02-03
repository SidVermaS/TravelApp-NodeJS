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