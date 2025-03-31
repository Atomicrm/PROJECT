const routes = require("express").Router()
const SubCategoryControllers = require("../controllers/SubCategoryControllers")
routes.post("/addsubcategory",SubCategoryControllers.addSubcategory)
routes.get("/getsubcategory",SubCategoryControllers.getSubcategory)
routes.get("/getsubcategory/:id",SubCategoryControllers.getSubcategory)
module.exports=routes