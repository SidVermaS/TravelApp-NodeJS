import Place from '../models/Place.js'

export const addPlace=async (req, res)=>    {
    try {
        const { title, latitude, longitude, no_of_trips }=req.body
        let photo_urls=await uploadMultiplePhotos(req, 'place')
        const place=new Place({
            title, latitude, longitude, no_of_trips, photo_urls
        })
        const savedPlace=await place.save()        
        return res.status(200).json({ place: savedPlace, message: 'Successfully added the place' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to add the place' })
    }
}

export const updatePlace=async (req, res)=> {
    try {
        const { _id, title, latitude, longitude, no_of_trips }=req.body
        const updatedPlace=await Place.findByIdAndUpdate(_id, { title, latitude, longitude, no_of_trips }, { new: false })
        return res.status(200).json({ place: updatedPlace, message: 'Successfully updated the place' })
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to updated the place' })
    }
}

