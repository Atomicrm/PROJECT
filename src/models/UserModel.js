const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    user_name:String
    ,
    phone:String,
    
    email:{type:String,
            unique:true
    }
    ,
    role_id:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    password:String
})

module.exports = mongoose.model("users",userSchema)