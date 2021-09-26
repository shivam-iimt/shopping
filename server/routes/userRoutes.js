const express = require("express");
const { authController,getUserProfile,registerUser } = require('../controllers/userControl')
const {protect} =require('../middlewares/authMiddleware')
const router = express.Router();
router.post( "/login", authController);
router.post( "/register", registerUser);
router.get("/profile",protect,getUserProfile )
module.exports = router;
