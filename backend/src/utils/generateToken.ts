import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

export function generateAccessToken(payload: JwtPayload, secrete: string) {
	return jwt.sign(payload, secrete, {
		expiresIn: '1d',
	});
}
export function generateRefreshToken(payload: JwtPayload, secrete: string) {
	return jwt.sign(payload, secrete, {
		expiresIn: '30d',
	});
}
// export function updateRefreshToken(user, refreshToken) {
//   user.refreshToken = refreshToken;
// }
