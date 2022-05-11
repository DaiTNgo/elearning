import { Application } from 'express';
import UserRoutes from './user-route';

function route(app: Application) {
  app.use('/user', UserRoutes);
}

export default route;
