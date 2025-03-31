const routes=require("express").Router()
const usercontrollers =require("../controllers/UserControllers")
routes.get("/users",usercontrollers.getAllusers)
routes.post("/user",usercontrollers.addUsers)
routes.delete("/user/:id",usercontrollers.deleteUsers)
routes.get("/user/:id",usercontrollers.getUsersbyid)
routes.post("/signup",usercontrollers.signup)
routes.post("/login",usercontrollers.login)
routes.post("/forgotpassword",usercontrollers.forgotpassword)
routes.post("/resetpassword",usercontrollers.resetpassword)
routes.post
module.exports= routes