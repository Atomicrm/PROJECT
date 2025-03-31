const AddProductModel = require("../models/AddProductModel")
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utils/CloudinaryUtil");



const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  //multer object....
  
  const upload = multer({
    storage: storage,
    //fileFilter:
  }).single("image");

const addproduct = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: err.message,
        });
      } else {
        // database data store
        //cloundinary
  
        const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
        console.log(cloundinaryResponse);
        console.log(req.body);
  
        //store data in database
        req.body.productURL = cloundinaryResponse.secure_url
        const savedproduct = await AddProductModel.create(req.body)
  
        res.status(200).json({
          message: "Product saved successfully",
          data: savedproduct
        });
      }
    });
  };

module.exports={
    addproduct
}