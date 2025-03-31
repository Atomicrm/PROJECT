const routes = require("express").Router()
const AddressControllers = require("../controllers/AddressControllers")
routes.post("/add",AddressControllers.addAddress)
routes.get("/get",AddressControllers.getAddress)
module.exports=routes