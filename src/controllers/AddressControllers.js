const AddressModel = require("../models/AddressModel")

const addAddress = async(req,res)=>{

    const savedAddress = (await AddressModel.create(req.body)).populate("state_id user_id city_id")

    res.json({
        message:"Address added Successfully",
        data:savedAddress
    })

}

const getAddress = async(req,res)=>{

    const allAddress = await AddressModel.find().populate("state_id user_id city_id")

    res.json({
        message:"Address fetched Successfully",
        data:allAddress
    })

}

module.exports={
    addAddress,getAddress
}