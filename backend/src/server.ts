import 'dotenv/config';
import http from 'http';
import app from './app';

import { connectDB } from './utils/connectDB';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
});
