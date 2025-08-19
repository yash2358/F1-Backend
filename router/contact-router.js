const express=require('express');
const router = express.Router();
const contactForm=require('../controllers/contact-controller');
const Validators=require('../validators/auth-validator');
const validate=require('../middlewares/validate-middleware');
router.route('/contact').post(validate(Validators.contactSchema), contactForm);
module.exports=router;