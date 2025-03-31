const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const roleRoutes = require("./src/routes/RoleRoute")
app.use(roleRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes)

const addressRoutes = require("./src/routes/AddressRoutes")
app.use("/address",addressRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",categoryRoutes)

const subcategoryRoutes = require("./src/routes/SubCategoryRoutes")
app.use("/subcategory",subcategoryRoutes)

const addproductRoutes = require("./src/routes/AddProductRoutes")
app.use("/addproduct",addproductRoutes)

const addcartRoutes = require("./src/routes/CartRoutes")
app.use("/addcart",addcartRoutes)

const addorderRoutes = require("./src/routes/OrderRoutes")
app.use("/addorder",addorderRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/node_internship").then(()=>{
    console.log("database connected...")
})





app.get("/test",(req,res)=>{
    

    console.log("test api is called")
    res.send("localhost has been created")

})







const PORT = 3134
app.listen(PORT,()=>{

    console.log("server has been created on port no",PORT)
})