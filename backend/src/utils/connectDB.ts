import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

export async function connectDB() {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully');
  } catch (err) {
    throw new Error('Unable to connect to the database');
  }
}
export default sequelize;
