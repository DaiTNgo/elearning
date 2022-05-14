import express from 'express';
import CourseController from '../controllers/course-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router.route('/').get(CourseController.test);

export default router;
