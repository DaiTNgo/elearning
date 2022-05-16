import { Request, Response } from 'express';
import { Model, ModelAttributes } from 'sequelize/types';
import FavouriteCourseModel from '../models/favourite-course-model';
import UserModel from '../models/user-model';

class User {
  //   [PATCH] /user/update/
  async updateUser(req: Request, res: Response) {
    //@ts-ignore
    const { id } = req.userData;
    const { username, avatar, description, acctwiter, mywebsite } = req.body;
    try {
      await UserModel.update(
        {
          user_name: username,
          acc_twiter: acctwiter,
          my_website: mywebsite,
          avatar,
          description,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(403).json({ success: false, error });
    }
  }
  //    [POST] /user/
  async findOneUser(req: Request, res: Response) {
    //@ts-ignore
    const { id } = req.userData;
    try {
      const user = await UserModel.findOne({
        where: { id },
      });
      //   console.log(user);
      if (user) {
        const { password, deletedAt, ...others } = user.toJSON();
        return res.status(200).json(others);
      }
      return res.status(200).json("You're not authentication.");
    } catch (error) {
      res.status(400).json(error);
    }
  }

  // [POST] /user/:courseId
  async addFavouriteCourse(req: Request, res: Response) {
    //@ts-ignore
    const userId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      await FavouriteCourseModel.findOrCreate({
        where: {
          course_id: courseId,
          user_id: userId,
        },
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  }
}
export default new User();
