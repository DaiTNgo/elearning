import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import CourseModel from './course-model';
import FavouriteCourseModel from './favourite-course-model';

class UserModel extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare user_name: string;
  declare avatar: string;
  declare description: string;
  declare acc_twiter: string;
  declare my_website: string;
  declare deletedAt: string;
  declare role: 'user' | 'admin' | 'instructor';
  declare updatePassword: boolean;
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
//n:m
// CourseModel.belongsToMany(UserModel, {
//   through: FavouriteCourseModel,
//   foreignKey: 'course_id',
// });

// UserModel.belongsToMany(CourseModel, {
//   through: FavouriteCourseModel,
//   foreignKey: 'user_id',
// });

UserModel.hasMany(FavouriteCourseModel, {
  foreignKey: 'user_id',
});

CourseModel.hasMany(FavouriteCourseModel, {
  foreignKey: 'course_id',
});

FavouriteCourseModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
});

FavouriteCourseModel.belongsTo(CourseModel, {
  foreignKey: 'course_id',
});

// 1:n
UserModel.hasMany(CourseModel, {
  foreignKey: 'instructor_id',
});

CourseModel.belongsTo(UserModel, {
  foreignKey: 'instructor_id',
});

UserModel.beforeCreate(async (user, options) => {
  const hashed = await bcrypt.hash(user.password, 10);
  user.password = hashed;
});

UserModel.beforeSave(async (user, options) => {
  //@ts-ignore
  if (user.updatePassword) {
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
  }
});

export default UserModel;
