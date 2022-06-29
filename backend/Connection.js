const mongoose = require("mongoose");

const DATABASE = process.env.DB;
mongoose.connect(DATABASE)
.then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(error)
});

module.exports = mongoose;