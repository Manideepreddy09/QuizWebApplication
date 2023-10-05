//create express app
const exp=require('express');
const app=exp()
const expressAsyncHandler = require("express-async-handler");
app.use(exp.json())
//connecting to mongoDB
const mongoose=require('./database.js')
mongoose();
//importing collection objects
const [cppObj,javaObj]=require('./Schemas/quizschema.js')
//assiging port number to the app
app.listen(2000,()=>console.log("server listening on port 2000....."))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//import user and products app
const userApi=require('./APIS/userAPI.js')

//forward request to userAPI when url starts with user-api
app.use('/users-api',userApi)

//handling quiz questions
app.post('/', expressAsyncHandler(async (request, response) =>{
        const subject=request.body.quiz;
        console.log(subject)
        if(subject==="JAVA")
        {
          const data= await javaObj.find({});
          console.log(data)
          response.status(201).send({message:"java",payload:{data}})
        }
      
        if(subject==="CPP")
        {
          const data= await cppObj.find({});
          response.status(201).send({message:"cpp",payload:{data}})
        }
  })
)

//create middleware to handle invalid path

const invalidpath=(request,response,next)=>
{
response.send({message:"Invalid path"

})
}

app.use(invalidpath)

//error handling using middleware

const errHandler=(error,request,response,next)=>{
    response.send({"errormeg":error.message})
}

app.use(errHandler)

