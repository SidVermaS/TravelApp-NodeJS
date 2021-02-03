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
            if(result1) {
                return res.status(201).json({ message: 'Successfully registered' })
            }   else    {
                return res.status(400).json({ message: 'Failed to register' })
            }            
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
            const { username, password }=req.body
            password=md5(password)
            
        }   else    {
            return res.status(400).json({ message: 'Username is not registered' })
        }
    }   catch(err)  {
        return res.status(500).json({ message: 'Failed to login' })
    }
}