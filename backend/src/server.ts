import 'dotenv/config';
import http from 'http';
import app from './app';
import {
  CourseModel,
  FavouriteCourseModel,
  TopicModel,
  UserModel,
} from './models';
import { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
  //   UserModel.sync({ alter: true });
});
