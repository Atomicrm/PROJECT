const routes = require("express").Router()
const StateController = require("../controllers/StateControllers")
routes.post("/addstate",StateController.addState)
routes.get("/getstate",StateController.getState)


module.exports=routes