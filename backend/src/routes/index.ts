import { Application } from 'express';
import AuthRoutes from './auth-route';
import UserRoutes from './user-route';

function route(app: Application) {
	app.use('/auth', AuthRoutes);
	app.use('/user', UserRoutes);
}

export default route;
