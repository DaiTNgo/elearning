import express from 'express';
import AuthController from '../controllers/auth-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/logout').post(checkAuth, AuthController.logout);
router.route('/sigup').post(AuthController.sigup);
router.route('/refreshtoken').post(checkAuth, AuthController.refreshToken);
router.route('/').get((req, res) => {
  res.json('ok');
});

export default router;
