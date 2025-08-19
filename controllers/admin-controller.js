const Contact = require('../models/contact-model');
const User = require('../models/user-model');

const adminData = async (req, res, next) => {
  try {
    const response = await User.find({},{password:0});
    return res.status(200).json({
      success: true,
      data: response,
      message: response.length ? 'Service data fetched successfully.' : 'No service data found.'
    });
  } catch (error) {
    console.error('Service API error:', error);
    next(error);
  }
};

const contactData = async (req, res, next) => {
  try {
    const response = await Contact.find();
    return res.status(200).json({
      success: true,
      data: response,
      message: response.length ? 'Service data fetched successfully.' : 'No service data found.'
    });
  } catch (error) {
    console.error('Service API error:', error);
    next(error);
  }
};

// const adminDataDelete = async (req, res, next) => {

//   try {
//    const deleteUser=await User.deleteOne({email:req.body.id});
//     return res.status(200).json({
//       success: true,
//       message: 'User Deleted Successfully' 
//     });
//   } catch (error) {
//     console.error('Service API error:', error);
//     next(error);
//   }
// };

const adminDataDelete = async (req, res, next) => {
  try {
   const deleteUser=await User.deleteOne({_id:req.params.id});
    return res.status(200).json({
      success: true,
      message: 'User Deleted Successfully' 
    });
  } catch (error) {
    console.error('Service API error:', error);
    next(error);
  }
};

const adminDataUpdate =async(req,res,next)=>{
  try{
    const body=req.body;
    
    const id=req.params.id;
    const update=await User.updateOne({_id:id},{$set:body});
    console.log(update);
    
     return res.status(200).json({
      success: true,
      message: 'User Details Updated Successfully' 
    });
  }
  catch(error){
 next(error)
  }
}

const getUserByID =async(req,res,next)=>{
  try{
    const id=req.params.id;
    const user=await User.findOne({_id:id},{password:0});
     return res.status(200).json({
      data:user,
      success: true,
      message: 'User Details Fetched Successfully' 
    });
  }
  catch(error){
 next(error)
  }
}


const contactDataDelete = async (req, res, next) => {
  try {
   const deleteUser=await Contact.deleteOne({_id:req.params.id});
    return res.status(200).json({
      success: true,
      message: 'User Deleted Successfully' 
    });
  } catch (error) {
    console.error('Service API error:', error);
    next(error);
  }
};

module.exports = {adminData,contactData,adminDataDelete,adminDataUpdate,getUserByID,contactDataDelete};