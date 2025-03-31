const stateModel = require("../models/StateModel")

    const addState = async (req, res) => {
        try {
          const savedState = await stateModel.create(req.body);
          res.status(201).json({
            message: "State added successfully",
            data: savedState,
          });
        } catch (err) {
          res.status(500).json({
            message: err,
          });
        }
      };


      const getState = async (req,res) => {
          
        
            const allState = await stateModel.find()
            res.status(201).json({
                message: "State fetched successfully",
                data: allState,
            })
        
      }

    //   const getState = async (req, res) => {
    //     try {
    //       const gotState = await stateModel.find();
    //       res.status(201).json({
    //         message: "State added successfully",
    //         data: gotState,
    //       });
    //     } catch (err) {
    //       res.status(500).json({
    //         message: err,
    //       });
    //     }
    //   };


module.exports={
    addState,getState
}