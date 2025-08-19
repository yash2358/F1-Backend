const errorMiddleware=(err,req,res,next)=>{
    
const Status=err.status || 500;
const message=err.message || "Meri Galti";
const success=false;
const extraDetail=err.extraDetail || "Extra Detail No";

return res.status(Status).json({message,extraDetail,success});
}

module.exports=errorMiddleware;