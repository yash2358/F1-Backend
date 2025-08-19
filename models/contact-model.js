const {Schema,model}=require("mongoose");
require('dotenv').config();
const contactSchema = new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
})

const Contact = new model("Contact",contactSchema);

module.exports=Contact;
