
const adminMiddleware=async(req,res,next)=>{
try{
    const isAdminRole=req.user.isAdmin
  if(!isAdminRole){
    return res.status(403).json({message:"Not admin role.Access Denied"})
  }
   else{
    next()
   }
}
catch(errror){
next(error)
}
}

module.exports=adminMiddleware