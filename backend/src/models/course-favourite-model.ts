import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import Course from './course-model';
import UserModel from './user-model';

class CourseFavourite extends Model {
  declare course_id: number;
  declare user_id: string;
}
CourseFavourite.init(
  {
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'CourseFavourite',
    timestamps: false,
    tableName: 'course_favourites',
  }
);

export default CourseFavourite;
