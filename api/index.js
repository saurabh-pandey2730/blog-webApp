import express  from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouters from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js';
import path from 'path';
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

const __dirname = path.resolve();

 app.use(express.json())
app.listen(3000,()=>{
    console.log(`app is running at 3000`)
})

app.use('/api/user', userRouters)

app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.use((err, req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message =err.message || 'Internal server Error'
    res.status(statusCode).json({
        message,
        success:false,
        statusCode
    })
})