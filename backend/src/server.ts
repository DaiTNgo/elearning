import 'dotenv/config';
import http from 'http';
import app from './app';
import CourseFavouriteModel from './models/course-favourite-model';
import CouseModel from './models/course-model';
import TopicModel from './models/topic-model';
import UserModel from './models/user-model';
import { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();

  //   await UserModel.sync({ alter: true });
  //   await CouseModel.sync({ alter: true });
  //   await TopicModel.sync({ alter: true });
  //   await CourseFavouriteModel.sync({ alter: true });
});
