import express from 'express';
import CourseController from '../controllers/course-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router
  .route('/favourite')
  .get(checkAuth, CourseController.getAllCourseFavourite);

router
  .route('/instructor/:instructorId')
  .get(checkAuth, CourseController.getAllCourseInstructorId);

router.route('/:courseId').get(checkAuth, CourseController.getOneCourse);

router.route('/').get(checkAuth, CourseController.getAllCourse);

export default router;
