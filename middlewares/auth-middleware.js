const jwt=require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware=async(req,res,next)=>{
const token=req.header('Authorization');
if(!token){
    return res.status(401).json({message:"NOT AUTHORISED"});
}

const jwtToken=token.replace("Bearer","").trim();
try{
    const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY);
    const realUser= await User.findOne({email:isVerified.email}).select({password:0})
    req.user=realUser;
    req.token=token;
    req.userId=realUser._id
next()
}
catch(errror){
return res.status(401).json({message:"UNAUTHORIZED"});
}
}

module.exports=authMiddleware