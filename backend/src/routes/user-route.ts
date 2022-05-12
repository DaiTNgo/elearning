import express from 'express';
import UserController from '../controllers/user-controller';
const router = express.Router();

router.route('/login').post(UserController.login);
router.route('/logout').post(UserController.logout);
router.route('/sigup').post(UserController.sigup);
router.route('/update/:id').post(UserController.updateUser);
router.route('/refreshtoken').post(UserController.refreshToken);
router.route('/').get((req, res) => {
	res.json('ok');
});

export default router;
