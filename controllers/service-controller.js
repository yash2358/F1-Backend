const Service = require('../models/service-model');

const serviceData = async (req, res, next) => {
  try {
    const response = await Service.find();
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

module.exports = serviceData;