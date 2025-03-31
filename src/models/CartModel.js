const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CartSchema = new Schema({

    product_id:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    quantity:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
)

module.exports = mongoose.model("cart",CartSchema)