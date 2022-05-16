import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('elearning', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

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
