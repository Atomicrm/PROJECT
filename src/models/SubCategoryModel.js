const mongoose = require("mongoose")
const Schema = mongoose.Schema
const SubCategorySchema = new Schema({

    subcategory_name:{
        type:String
    },
    category_id:{
        type:Schema.Types.ObjectId,
        ref:"category"
    }

},{
    timestamps:true
})

module.exports=mongoose.model("subcategory",SubCategorySchema)