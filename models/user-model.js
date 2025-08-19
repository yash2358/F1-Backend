require('dotenv').config();
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})

userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified("password")){
       next();
    }
    else{
        try{
        const saltRound=10;
        const hash_password=await bcrypt.hash(this.password,saltRound);
        user.password=hash_password
        }
        catch(error){
            next(error)
        }
    }
})
//compare password func
userSchema.methods.comparePassword=async function(password){
return await bcrypt.compare(password,this.password)
}

//generate token func
userSchema.methods.generateToken=async function(){
try{
return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
},
process.env.JWT_KEY,
{
    expiresIn:"30d"
}
)
}
catch(error){
console.error(error);
}
}
//define model or collection name

const User = new mongoose.model("User",userSchema);

module.exports=User;
