import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user-model';
import {
	generateAccessToken,
	generateRefreshToken,
} from '../utils/generateToken';
type FormType = {
	password: string;
	email: string;
};
type ResponseType = {
	success: boolean;
};
type ResponseTypeLogin = ResponseType & {
	errors: any;
	acessToken?: string;
};
type ResponseUpdateUserType = ResponseType & {
	errors?: any;
	user: null;
};
class User {
	// [POST] /user/login
	async login(req: Request, res: Response) {
		const msg = 'Something is wrong with your email or password';
		const errors = [
			{ path: 'password', message: msg },
			{ path: 'email', message: msg },
		];
		const resp: ResponseTypeLogin = { success: false, errors };
		const { email, password }: FormType = req.body;
		try {
			const user = await UserModel.findOne({
				raw: true,
				where: {
					email,
				},
			});
			if (user) {
				const passed = await bcrypt.compare(password, user.password);
				if (passed) {
					const maxAge: number = 1000 * 60 * 60 * 24 * 30;
					const { password: pw, ...other } = user;

					const acessToken = generateAccessToken(
						other,
						process.env.ACCESS_TOKEN_SECRET as string
					);
					const refreshToken = generateRefreshToken(
						other,
						process.env.REFRESH_TOKEN_SECRET as string
					);

					resp.success = true;
					resp.errors = [];
					resp.acessToken = acessToken;
					res.cookie('refresh', refreshToken, {
						httpOnly: true,
						expires: new Date(Date.now() + maxAge),
					});
				}
			}
			res.status(200).json(resp);
		} catch (error) {
			return res.status(401).json(error);
		}
	}
	// [POST] /user/sigup
	async sigup(req: Request, res: Response) {
		const { password, email } = req.body as FormType;
		try {
			const user = await UserModel.create({
				email,
				password,
			});
			//@ts-ignore
			const { password: pw, ...other } = user['dataValues'];
			res.status(200).json({
				success: true,
				user: other,
			});
		} catch (err: any) {
			res.status(422).json(err);
		}
	}
	// [POST] /user/login
	async logout(req: Request, res: Response) {
		return res.cookie('jwt', '');
	}
	//   [PATCH] /user/update/:email
	async updateUser(req: Request, res: Response) {
		const resp: ResponseUpdateUserType = { success: false, user: null };
		const { email } = req.params;
		const { username, avatar, description, acctwiter, mywebsite } = req.body;
		// if (email !== req.userData.email) {
		//   return res
		//     .status(401)
		//     .json({ msg: 'You do not have permission to update this user.' });
		// }
		try {
			const user = await UserModel.findOne({
				where: {
					email,
				},
			});
			if (user) {
				user.user_name = username;
				user.avatar = avatar;
				user.description = description;
				user.acc_twiter = acctwiter;
				user.my_website = mywebsite;
			}
			resp.success = true;
			//@ts-ignore
			resp.user = user;
			await user?.save();
			res.status(200).json(resp);
		} catch (error) {
			console.log('>>> error :', error);
			res.status(401).json(resp);
		}
	}

	// [POST] /user/refreshtoken
	async refreshToken(req: Request, res: Response) {
		const refreshCookie = req.cookies.refresh;
		try {
			// if(refreshCookie === )
			const user = await jwt.verify(
				refreshCookie,
				process.env.REFRESH_TOKEN_SECRET!
			);
			if (user) {
				// const { password, ...other } = user;
				const accessToken = generateRefreshToken(
					{ fasd: 'fasdfas' },
					process.env.ACCESS_TOKEN_SECRET as string
				);
				return res.status(200).json(accessToken);
			}
		} catch (error) {
			return res.status(401).json(error);
		}
	}
}

export default new User();
