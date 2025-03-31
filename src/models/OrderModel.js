const mongoose = require("mongoose")
const Schema = mongoose.Schema
const orderSchema = new Schema ({

product_id:{
    type:Schema.Types.ObjectId,
    ref:"product"
},
user_id:{
    type:Schema.Types.ObjectId,
    ref:"users"
},
quantity:{
    type:Schema.Types.Number,
    ref:"cart"
},
price:{
    type:Schema.Types.String,
    ref:"product"
}

},{
    timestamps:true
})

module.exports=mongoose.model("order",orderSchema)