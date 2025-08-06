const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET);
}

const registerUser = async (req,res)=>{
    const {firstName,lastName,emailId,password} = req.body;

    if(!firstName || !emailId || !password){
        res.status(400).send({message:"Please add all mandatory fields"});
    }

    const userExists = await User.findOne({emailId});
    if(userExists){
        res.status(400).json({message:"Already Exist"});
    }

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
    });
}

const loginUser = async (req,res)=>{
    const {emailId,password} = req.body;

    if(!emailId || !password){
        return res.status(400).json({message:"All all details"});
    }

    const userExists = await User.findOne({email});
    if(!userExists){
        return res.status(400).json({message:"No user found"});
    }

    if(req.body.password !=userExists.password){
        return res.status(400).json({message:"Incorrect Password"});
    }

    const token = generateToken(userExists);

    return res.send(200).json({message:"LoggedIn",token});
}


module.exports = {registerUser,loginUser}