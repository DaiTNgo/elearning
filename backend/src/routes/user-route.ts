import express from 'express';
import UserController from '../controllers/user-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router.route('/update').patch(checkAuth, UserController.updateUser);

router.route('/').get((req, res) => {
  res.json('ok');
});

export default router;
