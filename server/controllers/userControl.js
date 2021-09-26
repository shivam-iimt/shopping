const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const generateToken=require('../utils/generateToken')
const authController = asyncHandler(async (req, res) =>  { 
    const {email,password}=req.body;
    const user= await User.findOne({email})
    if(user&&(await user.matchPassword(password))){
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
    })}
    else{
        throw new Error("Invalid email or password")
    }
  })


  const registerUser=asyncHandler(async (req, res) =>  { 
    const {name,email,phone,password,cpassword}=req.body;
    const userExist= await User.findOne({email})
    if(userExist){
    res.status(400)
    throw new Error("User Already Exist")
    }
    if(password===cpassword){
    const user= await User.create({name,email,phone,password})
    if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        phone:user.phone,

        
    })}
    else{
        throw new Error("Something Went Wrong")
    }
  }
  else{
    res.status(401);
    throw new Error("Password should be same")
  }})

  const getUserProfile = asyncHandler(async (req, res) =>  { 
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            
        })}
        else{
            res.status(404)
            throw new Error("User Not Found")
        }
   })

  module.exports={authController, getUserProfile,registerUser}