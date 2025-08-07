const mongoose = require("mongoose");

const {Schema} = mongoose;

const profileSchema = new Schema({
    imageUrl :{type:String,required:true},
    summary :{type:String,required:true},
    workExperience :{type:String,required:true},
    linkedinUrl :{type:String,required:true},
    skills :{type:[String],required:true},
    githubUrl :{type:String,required:true},
    condingPlatform :{type:[String],required:true},
    resumeUrl :{type:String,required:true}
},
{timestamps:true})


module.exports = mongoose.model("Profile",profileSchema);