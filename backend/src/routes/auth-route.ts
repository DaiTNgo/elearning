import express from 'express';
import AuthController from '../controllers/auth-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/logout').post(checkAuth, AuthController.logout);
router.route('/sigup').post(AuthController.sigup);
router.route('/refreshtoken').post(AuthController.refreshToken);

export default router;
