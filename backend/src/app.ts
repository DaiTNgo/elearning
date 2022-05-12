import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import route from './routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(cookieParser());

//CORS
app.use((req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin,X-Requested-With,Content-Type,Accept,Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET,PATCH');
		return res.status(200).json({});
	}
	next();
});

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
		error: {
			message: error.message,
		},
	});
});

export default app;
