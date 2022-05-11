import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

console.log('---------instructors model--------');
const Instructor = sequelize.define(
  'Instructor',
  {
    instructor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    acc_twitter: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      allowNull: true,
    },
    information: {
      // work and favourite
      type: DataTypes.TEXT('tiny'),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    tableName: 'instructors',
  }
);

export default Instructor;
