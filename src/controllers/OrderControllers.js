const { get } = require("mongoose")
const ordermodel = require("../models/OrderModel")


const addorder = async(req,res) => {

 const addedorder = (await ordermodel.create(req.body)).populate("product_id user_id quantity price")

 res.json({
    message:"Order added successfully",
    data:addedorder
 })

}

const getorder = async(req,res) => {


     const allorder = await ordermodel.find(req.body)

     res.json({
        message:"Order Fetched Successfully",
        data:allorder
     })


}

module.exports={
    addorder,getorder
}