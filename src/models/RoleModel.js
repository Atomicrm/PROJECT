const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    //fileds /// get
        name:String,
        description:String

})

module.exports = mongoose.model("roles",roleSchema)
