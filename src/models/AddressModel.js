const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AddressSchema = new Schema({

    title:{
        type:String,
    },
    address_detail:{
        type:String,
    },
    landmark:{
        type:String
    },
    state_id:{
        type:Schema.Types.ObjectId,
        ref:"state"
    },
    city_id:{
        type:Schema.Types.ObjectId,
        ref:"city"
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    pincode:{
        type:String
    }

},{
    timestamps:true
}
)
module.exports=mongoose.model("address",AddressSchema)