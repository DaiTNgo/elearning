import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import UserModel from './user-model';
import CourseModel from './course-model';
class FavouriteCourseModel extends Model {
  declare course_id: number;
  declare user_id: number;
}
FavouriteCourseModel.init(
  {
    course_id: {
      primaryKey: true,
      unique: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      primaryKey: true,
      unique: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'favouriteCourse',
    tableName: 'favourite_courses',
  }
);
export default FavouriteCourseModel;
