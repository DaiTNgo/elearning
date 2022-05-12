import jwt from 'jsonwebtoken';

export function generateToken(payload: any, expiresIn: any, secrete: any) {
  return jwt.sign(payload, secrete, {
    expiresIn,
  });
}
// export function updateRefreshToken(user, refreshToken) {
//   user.refreshToken = refreshToken;
// }
