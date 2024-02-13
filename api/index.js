import express  from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouters from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
 import cookieParser from 'cookie-parser';
   import postRoutes from './routes/post.route.js'
 const app=express()
 app.use(cookieParser())
dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('DataBase connected')
})
.catch(()=>{
    console.log("Error in connection")
})



 app.use(express.json())
app.listen(3000,()=>{
    console.log(`app is running at 3000`)
})

app.use('/api/user', userRouters)

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)

app.use((err, req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message =err.message || 'Internal server Error'
    res.status(statusCode).json({
        message,
        success:false,
        statusCode
    })
})