import { Request, Response } from 'express';
import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/generateToken';
type ResponseSigupType = {
  password: string;
  email: string;
};
type ResponseTypeLogin = {
  success: boolean;
  errors: any;
  token?: string;
};
type ResponseUpdateUserType = {
  success: boolean;
  errors?: any;
  user: UserModel | null;
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
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({
        where: {
          email,
        },
      });
      if (user) {
        const passed = await bcrypt.compare(password, user.password);
        if (passed) {
          const maxAge: number = 1000 * 60 * 60 * 24 * 30;
          const signVals = user.toJSON();
          delete signVals.password;

          const acessToken = generateToken(
            signVals,
            process.env.ACCESS_TOKEN_SECRET as string,
            { expiresIn: '1d' }
          );
          const refreshToken = generateToken(
            signVals,
            process.env.REFRESH_TOKEN_SECRET,
            '30d'
          );

          resp.success = true;
          resp.errors = [];
          resp.token = acessToken;
          res.cookie('jwt', refreshToken, {
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
    const { password, email } = req.body as ResponseSigupType;
    try {
      const user = await UserModel.create({
        email: email,
        password: password,
      });
      res.status(200).json({
        success: true,
        user: user,
      });
    } catch (err: any) {
      res.status(422).json(err.errors);
    }
  }
  // [POST] /user/login
  async logout(req: Request, res: Response) {
    return res.cookie('jwt', '', { maxAge: -1 });
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
      const user = await UserModel.findByPk(email);
      if (user) {
        user.user_name = username;
        user.avatar = avatar;
        user.description = description;
        user.acc_twiter = acctwiter;
        user.my_website = mywebsite;
      }
      resp.success = true;
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
    const refreshCookie = req.cookies('jwt');
    try {
      // if(refreshCookie === )
      const user = await jwt.verify(
        refreshCookie,
        process.env.REFRESH_TOKEN_SECRET!
      );
      if (user) {
        const accessToken = await jwt.sign('sa', 'dfs'); //TODO:
        return res.status(200).json(accessToken);
      }
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}

export default new User();
