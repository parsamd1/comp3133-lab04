const mongoose=require('mongoose')

const userModel=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:4,
    },
    email:{
        type:String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true,
        match: /^[a-zA-Z\s]+$/
    },
    website:{
        type:String,
        required:true,
        match: /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/,
    },
    zipcode:{
        type:String,
        required:true,
        match:/^\d{5}(-\d{4})?$/,
    },
    phone_no:{
        type:String,
        required:true,
        match:/^1-\d{3}-\d{3}-\d{4}$/,
    }
})

const UserModel= mongoose.model('user', userModel)
module.exports = UserModel;