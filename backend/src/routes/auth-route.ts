import express from 'express';
import AuthController from '../controllers/auth-controller';
const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/logout').post(AuthController.logout);
router.route('/sigup').post(AuthController.sigup);
router.route('/refreshtoken').post(AuthController.refreshToken);
router.route('/').get((req, res) => {
	res.json('ok');
});

export default router;
