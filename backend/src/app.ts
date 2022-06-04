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

var whitelist = ['http://localhost:3000', 'http://localhost:3001'];
// var whitelist = [
//   'https://dnt-elearning.netlify.app',
//   'https://fe-elearning.netlify.app/',
// ];
var corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  preflightContinue: true,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));

// app.use(cors());
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
