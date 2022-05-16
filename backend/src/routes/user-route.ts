import express from 'express';
import UserController from '../controllers/user-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router.route('/update').patch(checkAuth, UserController.updateUser);
router.route('/:courseId').post(checkAuth, UserController.addFavouriteCourse);
router.route('/').post(checkAuth, UserController.findOneUser);

export default router;
