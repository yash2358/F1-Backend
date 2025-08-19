const {Schema, model}=require('mongoose');

const serviceSchema= new Schema({
    service:{
        type:String,
        require:true
    },
    description:{
        type:String,
        requires:true
    },
    price:{
        type:String,
        requires:true
    },
    provider:{
        type:String,
        requires:true
    },
})


const Service=new model("Service",serviceSchema);

module.exports=Service;