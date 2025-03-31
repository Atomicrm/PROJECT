const UserModel = require("../models/UserModel")
const routes = require("../routes/RoleRoute")
const bcrypt = require("bcrypt")
const mailUtil = require("../utils/MailUtil")
const jwt = require("jsonwebtoken");
const secret = "secret";

const getAllusers =async (req,res) => {
    

    const getusers = await UserModel.find() 


        res.json({
            message: "users fetched succesfully",
            data:getusers
        })

}

const  addUsers =async (req,res) => {
    

    try{
        const adduser = await(await UserModel.create(req.body)).populate("role_id")


        res.json({
            message: "users added succesfully",
            data:adduser
        })
    }
    catch(err){
        res.status(500).json({
            message:"errrrorrrrr!!!....",
            data:err
        })
    }

}
const  deleteUsers =async (req,res) => {
    

    const deleteduser = await UserModel.findByIdAndDelete(req.params.id) 


        res.json({
            message: "users deleted succesfully",
            data:deleteduser
        })

}

const  getUsersbyid =async (req,res) => {
    

    const getuser = await UserModel.findById(req.params.id) 


        res.json({
            message: "users fetched succesfully",
            data:getuser
        })

}

const signup = async (req,res)=>{

  try{
    const salt = bcrypt.genSaltSync(10)
    const hashpassword = bcrypt.hashSync(req.body.password,salt)
    req.body.password = hashpassword
    const usersignup = await UserModel.create(req.body)
     await mailUtil.sendingMail(usersignup.email,"welcome to eadvertisement","this is welcome mail")

    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // req.body.password = hashedPassword;
    // const createdUser = await userModel.create(req.body);
     
    res.status(201).json({
        message: "users signup succesfully",
        data:usersignup
    })
}
catch(err){
    res.status(501).json({
        message:"errrorrrr....",
        data:err
    })
}


}


const login = async (req,res) => {

    
        const email = req.body.email
        const password = req.body.password
        console.log(email,password)
        const foundUserByEmail = await UserModel.findOne({email : email}).populate("role_id")


        
        console.log(foundUserByEmail.email)
        console.log(foundUserByEmail)

        if(foundUserByEmail !=null){
            const isMatch = bcrypt.compareSync(password,foundUserByEmail.password)


            if(isMatch){
                res.status(201).json({
                    message:"login successfully",
                    data:foundUserByEmail
                })
            }
            else{
                res.status(404).json({
                    message:"email is not cred"

                })
            }

        }
        else{
            res.status(404).json({
                message:"email not found"
            })
        }
        
    
    // catch(err){
    //     res.status(501).json({
    //         message:"errorrr...",
    //         data:err
    //     })
    // }

}
const forgotpassword = async (req,res) => {

        const email = req.body.email

        const founduser = await UserModel.findOne({email:email})

        if(founduser){

            const token = jwt.sign(founduser.toObject(),secret)
            console.log(token)

            const url = `http://localhost:5185/forgotpassword/${token}`;
            const mailContent =  `<html>
                                    <a href="${url}">reset password</a>
                                  </html>`

            await mailUtil.sendingMail(founduser.email, "reset password", mailContent);
    res.json({
      message: "reset password link sent to mail.",
    });

        }
        else{
            res.json({
                message:"user not found please register"

            })
        }

}

const resetpassword = async (req,res) => {

    const token = req.body.token; //decode --> email | id
    const newPassword = req.body.password;

    
    const userFromToken = jwt.verify(token, secret);
  //object -->email,id..
  //password encrypt...
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(newPassword,salt);

  const updateduser = await UserModel.findByIdAndUpdate(userFromToken._id, {
    password: hashedPassword,
  });
  res.json({
    message: "password updated successfully..",
  });
};



module.exports={
    getAllusers,addUsers,deleteUsers,getUsersbyid,signup,login,forgotpassword,resetpassword
}