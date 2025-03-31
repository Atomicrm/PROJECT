const routes = require("express").Router()
const CategoryControllers = require("../controllers/CategoryControllers")
routes.post("/addcategory",CategoryControllers.addCategory)
routes.get("/getcategory",CategoryControllers.getCategory)
module.exports=routes