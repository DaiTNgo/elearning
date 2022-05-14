import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import TopicModel from './topic-model';
import UserModel from './user-model';

class CourseModel extends Model {
  declare course_id: number;
  declare price: number;
  declare instructor_id: string;
  declare description: string;
  declare name: string;
  declare image: string;
  declare type: string;
}
CourseModel.init(
  {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      validate: {
        len: {
          msg: 'Course must be a description',
          args: [10, 1000],
        },
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(150),
      validate: {
        len: {
          msg: 'Course must be a name',
          args: [10, 150],
        },
      },
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    type: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          msg: 'Type of course must be greater than 2 characters',
          args: [2, 100],
        },
      },
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Course',
    tableName: 'courses',
  }
);
CourseModel.hasMany(TopicModel, { foreignKey: 'course_id' });
export default CourseModel;
