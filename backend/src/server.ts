import http from 'http';
import app from './app';
import 'dotenv/config';
import UserModel from './models/user-model';
import CouseModel from './models/course-model';
import TopicModel from './models/topic-model';
import CourseFavouriteModel from './models/course-favourite-model';
import CourseTypeModel from './models/course-type-model';
import OrderTopicModel from './models/order-topic-model';
import sequelize, { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
console.log(process.env.DB_NAME);
server.listen(PORT, async () => {
	console.log(`Listening on ${PORT}`);
	// connectDB();

	//   await UserModel.sync({ alter: true });
	//   //   await InstructorModel.sync({ alter: true });
	//   await CouseModel.sync({ alter: true });
	//   await TopicModel.sync({ alter: true });
	//   await CourseFavouriteModel.sync({ alter: true });
	//   await CourseTypeModel.sync({ alter: true });
	//   await OrderTopicModel.sync({ alter: true });
});
