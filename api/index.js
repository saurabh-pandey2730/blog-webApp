import express  from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouters from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('DataBase connected')
})
.catch(()=>{
    console.log("Error in connection")
})


const app=express()

 app.use(express.json())
app.listen(3000,()=>{
    console.log(`app is running at 3000`)
})

app.use('/api/user', userRouters)

app.use('/api/auth', authRoutes)
