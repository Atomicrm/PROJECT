const routes=require("express").Router()
const roleController=require("../controllers/RoleController")
routes.get("/roles",roleController.getAllroles)
routes.post("/role",roleController.addRole)
routes.delete("/role/:id",roleController.deleteRole)
routes.get("/role/:id",roleController.getRole)
module.exports= routes