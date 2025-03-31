const routes = require("express").Router()
const ordercontroller = require("../controllers/OrderControllers")
routes.post("/add",ordercontroller.addorder)
routes.get("/get",ordercontroller.getorder)


module.exports=routes