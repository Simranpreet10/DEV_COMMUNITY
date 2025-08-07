
const mongoose = require("mongoose");
async function dbConnect(){
    await mongoose.connect(process.env.CONNECTION_URI).then(()=>{
        console.log("DB CONNECTED");
    });
}

module.exports = dbConnect