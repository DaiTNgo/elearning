import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import route from './routes';
const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());
// app.use(
//   cors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: true,
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );

//router
route(app);

//Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    message: error.message,
  });
});

export default app;
