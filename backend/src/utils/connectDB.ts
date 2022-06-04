import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
  'd20f2sue388jq2',
  'epiugtmgxhxtpc',
  '43af8602b7ca2dbff0edcaa00a45dbd0fee102e4b38708b25f9bde11207c61c7',
  {
    host: 'ec2-54-165-90-230.compute-1.amazonaws.com',
    dialect: 'postgres',
  }
);

export async function connectDB() {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully');
    console.log('-------------------------------------------');
  } catch (err: any) {
    throw new Error('Unable to connect to the database: "\n ' + err);
  }
}
export default sequelize;
