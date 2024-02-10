import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    
    },
    
        profilePicture:{
            type: String,
             default :"https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg",
        },
        isAdmin:{
            type :Boolean,
            default:false
        },
    
},
{
    timestamps:true
});

const User = mongoose.model('User',userSchema)
export default User;