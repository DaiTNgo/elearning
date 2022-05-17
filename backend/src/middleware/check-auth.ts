import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ResponseType } from '../controllers/auth-controller';

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const resp: ResponseType = { success: false };
  const authHeader = req.headers['authorization'] as string;
  const token = authHeader ? authHeader.split(' ')[1] : '';
  if (!token) {
    resp.success = false;
    resp.message = "You're not authentication";
    return res.status(401).json(resp);
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    //@ts-ignore
    req.userData = decoded;
    next();
  } catch (error) {
    resp.message = error;
    res.status(401).json(resp);
  }
};

export const checkInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  const user = req.userData;
  if (user.role === 'instructor' || user.role === 'admin') {
    next();
  } else return res.status(401).json("You're not authorizaion.");
};
