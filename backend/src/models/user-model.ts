import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';
console.log('---------user model--------');
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(155),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email not valid',
        },
      },
    },
    password: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        len: {
          msg: 'Password must be greater than 6 characters',
          args: [6, 255],
        },
      },
    },
    user_name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    avatar: {
      // type: DataTypes.BLOB,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      defaultValue: '',
    },
    acc_twiter: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    my_website: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    favourite_course: {
      // course_id
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'users',
    // timestamps: true,
    // indexes: [{ fields: ['id'] }],
  }
);

export default User;
