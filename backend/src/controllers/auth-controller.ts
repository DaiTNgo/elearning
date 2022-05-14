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
export type ResponseType = {
  success: boolean;
};
type ResponseTypeLogin = ResponseType & {
  // errors: any;
  message: string;
  acessToken?: string;
};
let refreshTokens: string[] = [];
class Auth {
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
  async login(req: Request, res: Response) {
    let msg = 'Something is wrong with your email or password';
    // const errors = [
    //   { path: 'password', message: msg },
    //   { path: 'email', message: msg },
    // ];
    const resp: ResponseTypeLogin = { success: false, message: msg };
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

          const acessToken = generateAccessToken(other);
          const refreshToken = generateRefreshToken(other);
          refreshTokens.push(refreshToken);

          resp.success = true;
          resp.acessToken = acessToken;
          resp.message = 'Log in successfully';
          res.cookie('refresh', refreshToken, {
            httpOnly: true,
            secure: false,
            // secure:true,
            expires: new Date(Date.now() + maxAge),
            sameSite: 'strict',
          });
        }
      }
      res.status(200).json(resp);
    } catch (error) {
      return res.status(401).json(error);
    }
  }

  // [POST] /user/logout
  async logout(req: Request, res: Response) {
    //@ts-ignore
    // const user = req.userData;
    //@ts-ignore
    const refreshToken = res.cookie.refresh;
    refreshTokens = refreshTokens.filter((rf) => rf !== refreshToken);
    res.cookie('jwt', '');
    return res.status(200).json('Logged out successfully.');
  }

  // [POST] /user/refreshtoken
  async refreshToken(req: Request, res: Response) {
    const refreshCookie = req.cookies.refresh;
    if (refreshTokens.includes(refreshCookie))
      return res.status(401).json("You're not authenticated");
    try {
      const user = jwt.verify(refreshCookie, process.env.REFRESH_TOKEN_SECRET!);
      //check user
      console.log(user);
      // const accessToken = generateRefreshToken({ user });
      // return res.status(200).json({ accessToken });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}

export default new Auth();
