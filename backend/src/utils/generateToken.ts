import jwt, { JwtPayload } from 'jsonwebtoken';

export function generateAccessToken(payload: JwtPayload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '1h',
  });
}
export function generateRefreshToken(payload: JwtPayload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: '30d',
  });
}
//hihih
