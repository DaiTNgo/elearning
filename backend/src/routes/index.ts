import { Application } from 'express';
import AuthRoutes from './auth-route';
import UserRoutes from './user-route';
import InstructorRoute from './instructor-route';
import CourseRoute from './course-route';
function route(app: Application) {
  app.use('/auth', AuthRoutes);
  app.use('/user', UserRoutes); //TODO:
  app.use('/instructor', InstructorRoute);
  app.use('/course', CourseRoute);
}

export default route;
