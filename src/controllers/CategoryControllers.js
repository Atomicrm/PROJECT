const CategoryModel = require("../models/CategoryModel")

const addCategory = async(req,res)=>{

    const savedCategory = await CategoryModel.create(req.body)

    res.json({
        message:"Category Added Successfully",
        data:savedCategory
    })

}

const getCategory = async(req,res)=>{

    const allCategory = await CategoryModel.find()

    res.json({
        message:"Category Fetched Successfully",
        data:allCategory
    })

}

module.exports={
    addCategory,getCategory
}