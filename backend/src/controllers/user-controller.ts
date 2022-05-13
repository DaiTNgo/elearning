import { Request, Response } from 'express';
import { ResponseType } from './auth-controller';
import UserModel from '../models/user-model';

type ResponseUpdateUserType = ResponseType & {
	errors?: any;
	user: null;
};
class User {
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
		} catch (error: any) {
			res.status(401).json({ resp, error });
		}
	}
}
export default new User();
