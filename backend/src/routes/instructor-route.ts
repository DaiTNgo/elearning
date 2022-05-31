import express from 'express';
import InstructorController from '../controllers/instructor-controller';
import { checkAuth, checkInstructor } from '../middleware/check-auth';
const router = express.Router();

router
  .route('/create-course')
  .post(checkAuth, checkInstructor, InstructorController.createCourse);
router
  .route('/update-course/:courseId')
  .put(checkAuth, checkInstructor, InstructorController.updateCourse);
router
  .route('/restore-course/:courseId')
  .post(checkAuth, checkInstructor, InstructorController.restoreCourse);
router
  .route('/delete-course/:courseId')
  .delete(checkAuth, checkInstructor, InstructorController.deleteCourse);
// ---------------------------------------------------------------------
router
  .route('/create-topic')
  .post(checkAuth, checkInstructor, InstructorController.createTopic);
router
  .route('/update-topic')
  .put(checkAuth, checkInstructor, InstructorController.updateTopic);

export default router;
