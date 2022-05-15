import sequelize from '../utils/connectDB';
import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';
import CourseModel from './course-model';
import FavouriteCourseModel from './favourite-course-model';
import TopicModel from './topic-model';

class UserModel extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare user_name: string;
  declare avatar: string;
  declare description: string;
  declare acc_twiter: string;
  declare my_website: string;
  declare role: 'user' | 'admin' | 'instructor';
}
UserModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(155),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email not valid',
        },
      },
    },
    role: {
      type: DataTypes.STRING('20'),
      defaultValue: 'user',
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
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: '',
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
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'User',
    tableName: 'users',
  }
);

// CourseModel.hasMany(TopicModel);
// UserModel.hasMany(CourseModel);

// CourseModel.belongsTo(UserModel);
UserModel.hasOne(CourseModel);
// CourseModel.belongsToMany(UserModel, {
//   through: FavouriteCourseModel,
// });

// UserModel.belongsToMany(CourseModel, {
//   through: FavouriteCourseModel,
// });

UserModel.beforeCreate(async (user, options) => {
  const hashed = await bcrypt.hash(user.password, 10);
  user.password = hashed;
});

// User.beforeSave(async (user, options) => {
//   if (user.updatePassword) {
//     const hashed = await bcrypt.hash(user.password, 10);
//     user.password = hashed;
//   }
// });

export default UserModel;
