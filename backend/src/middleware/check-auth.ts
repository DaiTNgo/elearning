import { NextFunction ,Request.Response} from 'express';
import jwt from 'jsonwebtoken'

export const checkAuth = async(req:Request,res:Response,next:NextFunction) =>{
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1]:'';
  if(!token) return res.status(401);
  try {
  const decoded = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET as string)
    req.userData = decoded;
    next();
  } catch (error) {
    res.status(401).json({error})
  }
}
