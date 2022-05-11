import http from 'http';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import UserModel from './models/user-model';
import CouseModel from './models/course-model';
import TopicModel from './models/topic-model';
import InstructorModel from './models/instructor-model';
import { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
console.log(process.env.DB_PASSWORD);
server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
  CouseModel.sync({ force: true });
  TopicModel.sync({ force: true });
  InstructorModel.sync({ force: true });
  UserModel.sync({ force: true });
});
