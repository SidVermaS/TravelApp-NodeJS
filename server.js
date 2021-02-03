import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileupload from 'express-fileupload'
import jwt from 'jsonwebtoken'


const app=express()
app.use(cors())
app.use(express.json())


// app.use(verifyToken)


app.use(fileupload())

function verifyToken(req,res,next)  {
    const bearerHeader=req.headers['authorization']
    
    if(typeof bearerHeader==='undefined')   {
        return res.status(403).json({ message: 'Unauthorized access' })
    }   else    {
        const bearer=bearerHeader.split(' ')
        const bearerToken=bearer[1]

        const privateKey='secretkey'

        jwt.verify(bearerToken, privateKey, (err, authData)=>   {
            if(err) {
                return res.status(403).json({ message: 'Unauthorized access' })
            }   else    {
                next()
            }
        })

    }
}

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>    {
    console.log(`Server started on ${PORT}`)
    mongoose.connect('mongodb+srv://cluster0.2sl9y.mongodb.net/test', { useNewUrlParser: true, }, ()=> {
        console.log('connected to DB')
    })
})
