import 'dotenv/config';
import http from 'http';
import app from './app';
import CouseModel from './models/course-model';
import TopicModel from './models/topic-model';
import UserModel from './models/user-model';
import FavouriteModel from './models/favourite-course-model';
import sequelize, { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();

  await UserModel.sync({ alter: true });
  await CouseModel.sync({ alter: true });
  await TopicModel.sync({ alter: true });
  await FavouriteModel.sync({ alter: true });
});
