const express=require('express');
const router = express.Router();
const authControllers=require('../controllers/auth-controller');
const Validators=require('../validators/auth-validator');
const validate=require('../middlewares/validate-middleware');
const authMiddleware=require('../middlewares/auth-middleware');

router.route('/').get(authControllers.home);
router.route('/register').post(validate(Validators.signupSchema),authControllers.register);
router.route('/login').post(validate(Validators.loginSchema),authControllers.login);//pehle validate karega and sab thik h to middleware next call karega and then login fucntion call
router.route('/user').get(authMiddleware,authControllers.user)
module.exports=router;