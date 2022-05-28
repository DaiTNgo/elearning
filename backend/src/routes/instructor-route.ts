import express from 'express';
import InstructorController from '../controllers/instructor-controller';
import { checkAuth, checkInstructor } from '../middleware/check-auth';
const router = express.Router();

router
  .route('/create-course')
  .post(checkAuth, checkInstructor, InstructorController.createCourse);

router
  .route('/restore/course/:courseId')
  .post(checkAuth, checkInstructor, InstructorController.restoreCourse);

router
  .route('/course/:courseId')
  .patch(checkAuth, checkInstructor, InstructorController.updateCourse)
  .delete(checkAuth, checkInstructor, InstructorController.deleteCourse);

router
  .route('/restore/topic')
  .post(checkAuth, checkInstructor, InstructorController.restoreTopic);
router
  .route('/topic')
  .delete(checkAuth, checkInstructor, InstructorController.deleteTopic)
  .post(checkAuth, checkInstructor, InstructorController.updateOrCreateTopic);

export default router;
