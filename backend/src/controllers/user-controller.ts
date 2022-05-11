import { Request, Response } from 'express';
import UserModel from '../models/user-model';

console.log('------------controllers------------');

class User {
  // [POST] /user/login
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
  }
  // [POST] /user/sigup
  async sigup(req: Request, res: Response) {}
  // [POST] /user/login
  async logout(req: Request, res: Response) {}
  // [PATCH] /user/update/:id
  async updateUser(req: Request, res: Response) {}
  // [POST] /user/refreshtoken
  async refreshToken(req: Request, res: Response) {}
}

export default new User();
