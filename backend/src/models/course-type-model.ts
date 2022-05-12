import { DataTypes, Model } from 'sequelize';
import Course from './course-model';
import sequelize from '../utils/connectDB';
class CourseType extends Model {
  declare course_id: number;
  declare type: string;
}
CourseType.init(
  {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    type: {
      primaryKey: true,
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
    modelName: 'CourseType',
    timestamps: false,
    tableName: 'course_types',
    // indexes: [{ unique: true, fields: ['course_id', 'type'] }],
  }
);
export default CourseType;
