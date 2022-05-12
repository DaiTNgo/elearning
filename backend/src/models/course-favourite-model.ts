import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import Course from './course-model';
import User from './user-model';

class CourseFavourite extends Model {
  declare course_id: number;
  declare email: string;
}
CourseFavourite.init(
  {
    email: {
      primaryKey: true,
      type: DataTypes.STRING(155),
      references: {
        model: User,
        key: 'email',
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
