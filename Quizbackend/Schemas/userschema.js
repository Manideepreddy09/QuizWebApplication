//importing mongoose module
const mongoose=require("mongoose")
// Calling Schema class
const Schema = mongoose.Schema;
//creating Schema 
const userData=new Schema({
    username:{type:String},
    email:{type:String},
    mobile:{type:String},
    password:{type:String},
})
//creating user collection
const userObj=mongoose.model("userData",userData)

module.exports=userObj;