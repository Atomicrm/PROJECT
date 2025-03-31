const SubcategoryModel = require("../models/SubCategoryModel")

const addSubcategory = async(req,res)=>{

    const savedSubcategory = await (await SubcategoryModel.create(req.body)).populate("category_id")

    res.json({
        message:"SubCategory Added Successfully",
        data:savedSubcategory
    })

}

const getSubcategory = async(req,res)=>{

    const allsubcategory = await SubcategoryModel.find().populate("category_id")

    res.json({
        message:"Subcategory Fetched Successfully",
        data:allsubcategory
    })

}

const getSubcategoryBycategoryid = async(req,res)=>{

    const allsubcategoryByid = await SubcategoryModel.findById({category_id: req.params.category_id})

    res.json({
        message:"Sub-category Found",
        data:allsubcategoryByid
    })

}

module.exports={
    addSubcategory,getSubcategory,getSubcategoryBycategoryid
}