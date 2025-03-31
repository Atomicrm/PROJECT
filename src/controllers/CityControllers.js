const cityModel = require("../models/CityModel")

    const addCity = async (req, res) => {
        
          try{
            const savedcity = await (await cityModel.create(req.body)).populate("state_id")
          res.status(201).json({
            message:"city added successfully",
            data:savedcity
          })
        }
        catch(err){
            res.status(500).json({
                message:"errrooorrr",
                data:err
            })
        }
       
      };

      const getCity = async(req,res) =>{
 
        try{
            const allcity = await cityModel.find()
          res.status(201).json({
            message:"city fetched successfully",
            data:allcity
          })
        }
        catch(err){
            res.status(500).json({
                message:"errrooorrr",
                data:err
            })
        }

      }


    //   const getCity = async (req,res) => {
          
        
    //         const allcity = await cityModel.find().populate("state_id")
    //         res.status(201).json({
    //             message: "city fetched successfully",
    //             data: allcity,
    //         })
        
    //   }

  

module.exports={
    addCity,getCity
}