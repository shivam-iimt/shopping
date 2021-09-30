const express = require("express");
const { authController,getUserProfile,registerUser ,updateUserProfile} = require('../controllers/userControl')
const {protect} =require('../middlewares/authMiddleware')
const router = express.Router();
router.post( "/login", authController);
router.post( "/register", registerUser);
router.get("/profile",protect,getUserProfile )
router.put("/update",protect,updateUserProfile )
module.exports = router;
