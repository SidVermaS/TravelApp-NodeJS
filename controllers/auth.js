import md5 from 'md5'
import Profile from '../models/Profile.js'

export const register = async (req, res)=>    {
    try {
        const result=await Profile.findOne({ username: req.body.username })
        if(result)  {
            return res.status(409).json({ message: 'Username is already registered' })
        }   else    {
            const { name, username, password, mobile_no, photo_url }=req.body
            const profile=new Profile({
                name, username, password: md5(password), mobile_no, photo_url 
            })
            const result1=await profile.save()
            return res.status(201).json({ message: 'Successfully registered' })
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to register' })
    }
}

export const login=async (req, res)=>   {
    try {
        const result=await Profile.findOne({
            username: req.body.username
        })
        if(result)  {

        }   else    {
            
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to login' })
    }
}