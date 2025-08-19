const User=require('../models/user-model');
const home = async(req,res)=>{
    try{
    res.status(200).send("Welcome to my project");
    }
    catch(error){
    console.log(error);
    }
}
const register = async(req,res)=>{
    try{
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
            res.status(400).json({message:"email already exists"});
        }
        else{
        const userCreated=await User.create({username,email,phone,password})
        res.status(200).json({message:"Registered Successfully", 
        token: await userCreated.generateToken(),
        userId:userCreated._id.toString()
    });
        }
        
    }
    catch(error){
    next(error)
    }
}

const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
        const user=await userExist.comparePassword(password)
        if(user){
            res.status(200).json({message:"Login Successfully", 
            token: await userExist.generateToken(),
            userId:userExist._id.toString()
        });
        }
        else{
            res.status(400).json({message:"Invalid Credentials"});
        }
        }
        else{
            res.status(400).json({message:"Please Register"});
        }
        
    }
    catch(error){
    res.status(400).json("ERROR");
    }
}

const user=async(req,res)=>{
    try{
       const userData=req.user;
       return res.status(200).json({message:userData})
    }
    catch(e){
   console.log(`USER ME ERROR ${e}`)
    }
}

module.exports= {home,register,login,user};