const { get } = require("mongoose")
const CartModel = require("../models/CartModel")



    const addcart = async(req,res) => {

        const addedcart = (await CartModel.create(req.body)).populate("category_id subcategory_id user_id")

        res.json({
            message:"cart added successfully",
            data:addedcart
        })
    }

    const getcart = async(req,res) => {

        const savedcart = await CartModel.find(req.body)

        res.json({
            message:"cart fetched successfully",
            data:savedcart
        })
    }

    module.exports={
        addcart,getcart
    }