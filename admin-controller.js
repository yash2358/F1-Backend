const Contact = require('../models/contact-model');
const User = require('../models/user-model');

const adminData = async (req, res, next) => {
  try {
    const response = await User.findOne({email:"ash@gmail.com"},{password:0});
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

module.exports = {adminData,contactData};