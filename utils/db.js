require('dotenv').config();
const mongoose =require('mongoose');
// const URL="mongodb://127.0.0.1:27017/mern_admin"; for use in cmd(mongoose)
const URL=process.env.MONGODB_URL;
// mongoose.connect(URL);

const connectDb=async()=>{
try{
await mongoose.connect(URL);
console.log("Connected Successfully");
}
catch(error){
console.error("CONNECTION FAILED");
process.exit(0);
}
}

module.exports=connectDb