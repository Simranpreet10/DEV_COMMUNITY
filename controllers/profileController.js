const Profile = require("../models/profileModel");


const createProfile = async (req,res)=>{

    const {imageUrl,summary,workExperience,linkedinUrl,skills,githubUrl,condingPlatform,resumeUrl} = req.body;


    if(!imageUrl || !summary || !workExperience || !linkedinUrl ||!skills || !githubUrl || !condingPlatform || !resumeUrl){
        return res.status(400).send({message:"All fields are required"});
    }

    try{
        // const profile = await Profile.findOne()

        const newprofile = await Profile.create({
            imageUrl,
            summary,
            workExperience,
            linkedinUrl,
            skills,
            githubUrl,
            condingPlatform,
            resumeUrl
        });

        const data = await newprofile.save();
        res.status(201).json({
        message:"Profile added successfully",
        data   
    });
    }
    catch(err){
        res.status(500);
    }
}




const getProfile = async (req,res)=>{
    const data = await Profile.find({});
     res.status(201).json({
        message:"Profile fetched successfully",data
    });
}

module.exports = {getProfile,createProfile}