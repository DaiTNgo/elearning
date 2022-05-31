import express from 'express';
import CourseController from '../controllers/course-controller';
import { checkAuth } from '../middleware/check-auth';
const router = express.Router();

router
  .route('/favourite')
  .get(checkAuth, CourseController.getAllCourseFavourite);

// router.route('/test').get(CourseController.test);

router
  .route('/instructor/:instructorId')
  .get(CourseController.getAllCourseInstructorId);

router.route('/:courseId').get(CourseController.getOneCourse);

router.route('/').get(CourseController.getAllCourse);

export default router;
