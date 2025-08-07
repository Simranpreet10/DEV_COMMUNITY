const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req,res)=>{
    const {firstName,lastName,emailId,password} = req.body;

    if(!firstName || !emailId || !password){
        return res.status(400).send({message:"Please add all mandatory fields"});
    }

    try{
    const userExists = await User.findOne({emailId});
    if(userExists){
        return res.status(400).json({message:"Already Exist"});
    }

    // const hashedpassword = await bcrypt.hash(password,10);


    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    });

    await newUser.save();
    const token = generateToken(newUser);

    res.status(201).json({
        message:"User added successfully",
        token   
    });}
    catch(err){
        res.status(500);
    }
}

const loginUser = async (req,res)=>{
    const {emailId,password} = req.body;

    if(!emailId || !password){
        return res.status(400).json({message:"All all details"});
    }

    try{
    const userExists = await User.findOne({emailId});
    if(!userExists){
        return res.status(400).json({message:"No user found"});
    }

    if(req.body.password !=userExists.password){
        return res.status(400).json({message:"Incorrect Password"});
    }

    const token = generateToken(userExists);

    return res.send(200).json({message:"LoggedIn",token});}
    catch(err){
        res.status(500);
    }
}


module.exports = {registerUser,loginUser}