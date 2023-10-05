//create mini-express(separate Route) app
const exp = require("express");
const userApp = exp.Router();

//body parser
userApp.use(exp.json());

//import hashing
const bcryptjs = require("bcryptjs");
//import jwt
const jwt = require("jsonwebtoken");
//import express async handler
const expressAsyncHandler = require("express-async-handler");

//import user obj
const userobj=require('../Schemas/userschema')

//register user--public route
userApp.post(
    "/register-user",
    expressAsyncHandler(async (request, response) => {
        console.log("Register")
      //get user collection
      //let userobj=request.app.get('usercollection')
      //get user from client
      const newuser = request.body;
      //verify the user already exist or not
      const userDB = await userobj.findOne({ email: newuser.email });
  
      //if user already exist
      if (userDB !== null) {
        response.status(200).json({ message: "User already have an account" });
      }
      //if not exit
      else {
        //hash the password
        let hashedpassword = await bcryptjs.hash(newuser.password, 6);
        //replace plain password with hashed password
        newuser.password = hashedpassword;
        //insert user
        console.log(newuser);
        await userobj.create(newuser);
        response.status(201).json({ messsage: "user created" });
      }
    })
  );
  //users-resetpassword
userApp.post("/resetpassword",expressAsyncHandler(async (request,response)=>{
    const newuser= request.body;
    console.log("password")
    let userDB= await userobj.findOne({email:newuser.email});
    if(userDB==null) response.status(200).send({message:"Account does not exist with this email"});
    else
    {
       //hash the password
       let hashedpassword = await bcryptjs.hash(newuser.password, 6);
       const updateOperation={email:newuser.email}
       const updateValue={password:hashedpassword}
      const res= await userobj.updateOne(updateOperation,updateValue)
      response.status(201).send({message:"Password Updated successfully"});
    }
}))
//userlogin--public route
userApp.post(
    "/login-user",
    expressAsyncHandler(async (request, response) => {
      //get usercollectiononj
      //let userobj = request.app.get("usercollection");
      //get login details  from client
      const newuser = request.body;
      //verify username of usercredtials
      let userDB = await userobj.findOne({ email: newuser.email });
      //if username if invalid
      if (userDB == null) response.send({ message: "user Invalid" });
      //username valid
      else {
        //verify user password
        let flag = await bcryptjs.compare(newuser.password, userDB.password);
        //password not valid
        if (flag == false) {
          response.send({ message: "Invaild password" });
        }
        //password matched
        else {
          //create JWT token
          let signedjwttoken = jwt.sign({ email: userDB.email }, "abcdef", {
            expiresIn: 10000,
          });
          //send tokne to client
          response
            .status(201)
            .send({ message: "Login successfully", token: signedjwttoken });
        }
      }
    })
  );

  module.exports=userApp;
