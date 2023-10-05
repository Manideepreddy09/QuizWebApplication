//importing mongoose module
const mongoose=require('mongoose')

//url to connect mongoDB
const url='mongodb+srv://manideepreddy:abcd@databases.jnjcjji.mongodb.net/?retryWrites=true&w=majority'

// Connecting to database
const mongoDB=()=>{mongoose.connect(url).then((ans) => {
    console.log("ConnectedSuccessful")
}).catch((err) => {
    console.log("Error in the Connection")
})}

module.exports=mongoDB;
