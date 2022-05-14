import { Request, Response } from 'express';
import { Model, ModelAttributes } from 'sequelize/types';
import UserModel from '../models/user-model';

class User {
  //   [PATCH] /user/update/
  async updateUser(req: Request, res: Response) {
    //@ts-ignore
    const { id } = req.userData;
    const { username, avatar, description, acctwiter, mywebsite } = req.body;
    try {
      const user = await UserModel.findOne({
        where: {
          id,
        },
      });
      if (!user) {
        return res.status(400).json('User not found.');
      }
      user.user_name = username;
      user.avatar = avatar;
      user.description = description;
      user.acc_twiter = acctwiter;
      user.my_website = mywebsite;

      const {
        //@ts-ignore
        dataValues: { password, ...others },
      } = user;

      user?.save();
      res.status(200).json({ success: true, others });
    } catch (error: any) {
      res.status(403).json({ success: false, error });
    }
  }
}
export default new User();
