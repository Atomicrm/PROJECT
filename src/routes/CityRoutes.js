const routes = require("express").Router()
const CityController = require("../controllers/CityControllers")
routes.post("/add",CityController.addCity)
routes.get("/get",CityController.getCity)


module.exports=routes