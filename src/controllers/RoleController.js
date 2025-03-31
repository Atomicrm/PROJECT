const roleModel = require("../models/RoleModel")
const getAllroles =async (req,res) => {
    

    const roles = await roleModel.find() 


        res.json({
            message: "roles fetched succesfully",
            data:roles
        })

}

const addRole = async(req,res) => {

    const saveRole = await roleModel.create(req.body)
    res.json({
        message:"role has been added",
        data:saveRole
    })
}
const deleteRole = async(req,res) => {

    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"role hase been deleted",
        data:deletedRole
    })
}
const getRole = async(req,res) => {
    
    const getRolebyid = await roleModel.findById(req.params.id)
    res.json({
        message:"role has been fetched",
        data:getRolebyid
    })
}
module.exports={
    getAllroles,addRole,deleteRole,getRole
}