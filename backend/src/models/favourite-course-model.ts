import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import CourseModel from './course-model';
import TopicModel from './topic-model';
import UserModel from './user-model';

class FavouriteCourseModel extends Model {
  declare course_id: number;
  declare user_id: number;
}
FavouriteCourseModel.init(
  {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: CourseModel,
        key: 'course_id',
      },
    },
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'favouriteCourse',
    tableName: 'favourite_courses',
  }
);
export default FavouriteCourseModel;
