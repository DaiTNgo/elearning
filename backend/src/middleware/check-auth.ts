import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'] as string;
  const token = authHeader ? authHeader.split(' ')[1] : '';
  if (!token) return res.status(403).json("You're not authentication");
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    //@ts-ignore
    req.userData = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error, msg: "You're not authentication" });
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
  } else return res.status(403).json("You're not authorizaion.");
};
