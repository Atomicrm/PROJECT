const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AddProduct = new Schema ({

    name:{
        type:String

    },
    productURL:{
        type:String,
        required:true
    },
    category_id:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    subcategory_id:{
        type:Schema.Types.ObjectId,
        ref:"subcategory"
    },
    baseprice:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("product",AddProduct)