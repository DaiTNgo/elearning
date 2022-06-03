import { Request, Response } from 'express';
import FavouriteCourseModel from '../models/favourite-course-model';
import UserModel from '../models/user-model';
import { updateUserValidate } from '../utils/validations';
import { ResponseType } from './auth-controller';

class User {
  //[PUT] /user/update/
  async updateUser(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const { id } = req.userData;
    const { username, acctwiter, mywebsite, avatar, description } = req.body;
    // console.log('---------------------------', req.body);
    const { error } = updateUserValidate({
      user_name: username,
      acc_twiter: acctwiter,
      my_website: mywebsite,
      avatar,
      description,
    });
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }
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

      resp.success = true;
      resp.message = {
        id,
        user_name: username,
        acc_twiter: acctwiter,
        my_website: mywebsite,
        avatar,
        description,
      };
      return res.status(200).json(resp);
    } catch (error: any) {
      resp.message = error;
      res.status(403).json(resp);
    }
  }
  //TODO: Chua can chuc nang nay.
  //    [POST] /user/
  async findOneUser(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const { id } = req.userData;
    try {
      const user = await UserModel.findOne({
        where: { id },
      });
      if (user) {
        const { password, deletedAt, ...others } = user.toJSON();
        resp.success = true;
        resp.message = others;
        return res.status(200).json(resp);
      }
      resp.success = false;
      resp.message = 'User Not found.';
      return res.status(400).json(resp);
    } catch (error) {
      resp.message = error;
      res.status(400).json(resp);
    }
  }

  // [POST] /user/favourite/:courseId
  async addFavouriteCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const userId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const [courseFavourite] = await FavouriteCourseModel.findOrCreate({
        where: {
          course_id: courseId,
          user_id: userId,
        },
      });
      resp.success = true;
      resp.message = courseFavourite;
      res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      res.status(400).json(resp);
    }
  }
  //TODO: check password
  //[PATCH] /user/update/password
  async updatePassword(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const { id } = req.userData;
    const { password } = req.body;
    try {
      const user = await UserModel.findByPk(id);
      if (!user) {
        resp.success = false;
        resp.message = 'Something is wrong';
        return res.status(404).json(resp);
      }
      user.updatePassword = true;
      user.password = password;
      await user.save();

      resp.success = true;
      resp.message = user;
      res.status(201).json(resp);
    } catch (error: any) {
      resp.message = error;
      res.status(403).json(resp);
    }
  }
}
export default new User();
