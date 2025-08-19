const express=require('express');
const adminApi = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const router = express.Router();

router.route('/users').get(authMiddleware,adminMiddleware,adminApi.adminData);
router.route('/contacts').get(authMiddleware,adminApi.contactData);
// router.route('/deleteUser').delete(adminApi.adminDataDelete)
router.route('/deleteUser/:id').delete(authMiddleware,adminMiddleware,adminApi.adminDataDelete)
router.route('/updateuser/:id').patch(authMiddleware,adminMiddleware,adminApi.adminDataUpdate)
router.route('/getuser/:id').get(authMiddleware,adminMiddleware,adminApi.getUserByID)
router.route('/deletecontact/:id').delete((authMiddleware,adminApi.contactDataDelete));
module.exports=router;