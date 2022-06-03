import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user-model';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../utils/generateToken';
import { userValidate } from './../utils/validations';
type FormType = {
  password: string;
  email: string;
};

export type ResponseType = {
  success: boolean;
  message?: any;
  accessToken?: string;
};
let refreshTokens: string[] = [];
class Auth {
  // [POST] /user/sigup
  async sigup(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const { password, email } = req.body as FormType;
    const { error } = userValidate(req.body);
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }
    try {
      const user: UserModel = await UserModel.create({
        email,
        password,
      });
      const { password: pw, ...others } = user.toJSON();
      (resp.success = true), (resp.message = others);
      res.status(201).json(resp);
    } catch (error: any) {
      resp.message = error.errors[0].message;
      return res.status(422).json(resp);
    }
  }

  // [POST] /auth/login
  async login(req: Request, res: Response) {
    let msg = 'Something is wrong with your email or password';
    const resp: ResponseType = { success: false, message: msg };
    const { email, password }: FormType = req.body;
    const { error } = userValidate(req.body);
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }
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
          const { id, role } = user;
          const acessToken = generateAccessToken({ id, role });
          const refreshToken = generateRefreshToken({ id, role });
          refreshTokens.push(refreshToken);

          const { deletedAt, updatedAt, createdAt, password, ...others } = user;
          resp.success = true;
          resp.accessToken = acessToken;
          resp.message = others;
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
      resp.message = error;
      return res.status(400).json(resp);
    }
  }

  // [POST] /user/logout
  async logout(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const refreshToken = req.cookies.refresh;
    refreshTokens = refreshTokens.filter((rf) => rf !== refreshToken);
    res.cookie('refresh', '');
    (resp.success = true), (resp.message = 'Logged out successfully.');
    return res.status(204).json(resp);
  }

  // [POST] /auth/refreshtoken
  async refreshToken(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const refreshCookie = req.cookies.refresh;
    if (!refreshTokens.includes(refreshCookie)) {
      return res.status(401).json("You're not authenticated");
    }
    try {
      const user = jwt.verify(refreshCookie, process.env.REFRESH_TOKEN_SECRET!);
      //@ts-ignore
      const { iat, exp, ...others } = user;
      const accessToken = generateAccessToken(others);
      resp.success = true;
      resp.accessToken = accessToken;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(400).json(resp);
    }
  }
}

export default new Auth();
