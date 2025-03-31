const routes = require("express").Router()
const AddProductController = require("../controllers/AddProductController")
routes.post("/add",AddProductController.addproduct)

module.exports=routes