import express from 'express';
import InstructorController from '../controllers/instructor-controller';
import { checkAuth, checkInstructor } from '../middleware/check-auth';
const router = express.Router();

router
  .route('/')
  .post(checkAuth, checkInstructor, InstructorController.createCourse)
  .delete(checkAuth, checkInstructor, InstructorController.deleteTopic);
router
  .route('/:courseId')
  .patch(checkAuth, checkInstructor, InstructorController.updateCourse)
  .delete(checkAuth, checkInstructor, InstructorController.deleteCourse);

router
  .route('/restore/:courseId')
  .post(checkAuth, checkInstructor, InstructorController.restoreCourse);

// router.route('/').patch(checkAuth, UserController.updateUser);

router.route('/').get((req, res) => {
  res.json('ok');
});

export default router;
