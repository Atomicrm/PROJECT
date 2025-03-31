const routes = require("express").Router()
const cartController = require("../controllers/CartController")
routes.post("/add",cartController.addcart)
routes.get("/get",cartController.getcart)

module.exports = routes