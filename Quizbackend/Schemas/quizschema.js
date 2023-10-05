//importing mongoose module
const mongoose=require("mongoose")
// Calling Schema class
const Schema = mongoose.Schema;
// Creating Structure of the collection for CPP Quiz
const collection_structure1= new Schema({
        id: { type: Number },
        question: { type: String },
        options: { type: Array}
})
// Creating Structure of the collection for JAVA Quiz
const collection_structure2= new Schema({
        id: { type: Number },
        question: { type: String },
        options: { type: Array}
})
  
// Creating collection
const cppObj= mongoose.model(
        "usercollectiondatabase1", collection_structure1)
// Creating collection
const javaObj= mongoose.model(
        "usercollectiondatabase2", collection_structure2)
module.exports=[cppObj,javaObj];