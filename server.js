const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const profileRouter = require("./routes/profileRoute")
const userRouter = require("./routes/userRoute");

const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json())

app.use("/profile",profileRouter);

dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running on port: ",PORT);
    });
});