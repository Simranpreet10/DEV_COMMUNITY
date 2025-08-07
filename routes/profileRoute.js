const express = require("express");
const {getProfile,createProfile} = require("../controllers/profileController");

const router = express.Router();

const app = express();


router.get("/getprofile",getProfile);
router.post("/createprofile",createProfile);

module.exports = router;