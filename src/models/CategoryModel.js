const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CategorySchema = new Schema({

    categoryname:{
        type:String,
        required:true
    }

},{
    timestamps:true
}
)

module.exports=mongoose.model("category",CategorySchema)