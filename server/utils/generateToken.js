const jwt = require('jsonwebtoken')
const generateToken=(id)=>{
    return jwt.sign({id},'zxcvbnmasdfghjkl',{expiresIn:'15d'})
}
module.exports=generateToken