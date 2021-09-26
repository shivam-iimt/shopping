const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const asyncHandler = require("express-async-handler");
const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, 'zxcvbnmasdfghjkl')
            req.user=await User.findById(decode.id).select('-password')
            next();
        } catch (error) {
            console.log(error.message)
            res.status(401);
        throw new Error("Not Authorized, Invalid Token")
         }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized, Invalid Token")
    }


})
module.exports = { protect }