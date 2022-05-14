import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authenticate as string;
  const token = authHeader ? authHeader.split(' ')[1] : '';
  if (!token) return res.status(401).json("You're not authentication");
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    //@ts-ignore
    req.userData = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error, msg: "You're not authentication" });
  }
};
