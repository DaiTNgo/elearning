import http from 'http';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import UserModel from './models/user-model';
import CouseModel from './models/course-model';
import TopicModel from './models/topic-model';
import InstructorModel from './models/instructor-model';
import CourseFavouriteModel from './models/course-favourite-model';
import CourseTypeModel from './models/course-type-model';
import OrderTopicModel from './models/order-topic-model';

import { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
console.log(process.env.DB_PASSWORD);
server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
  await UserModel.sync({ force: true });
  await InstructorModel.sync({ force: true });
  await CouseModel.sync({ force: true });
  await TopicModel.sync({ force: true });
  await CourseFavouriteModel.sync({ force: true });
  await CourseTypeModel.sync({ force: true });
  await OrderTopicModel.sync({ force: true });
});
