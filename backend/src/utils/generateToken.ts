import jwt from 'jsonwebtoken';
export async function generteAccessToken(id: string) {
  const secretAccessToken = process.env.ACCESS_TOKEN as string;
  return jwt.sign(id, secretAccessToken);
}
