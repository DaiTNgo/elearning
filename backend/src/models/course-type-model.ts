import { DataTypes } from 'sequelize';
import Course from './course-model';
import sequelize from '../utils/connectDB';

const CourseType = sequelize.define(
	'CourseType',
	{
		course_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Course,
				key: 'course_id',
			},
		},
		type: {
			type: DataTypes.STRING(100),
			primaryKey: true,
			validate: {
				len: {
					msg: 'Type of course must be greater than 2 characters',
					args: [2, 100],
				},
			},
		},
	},
	{
		timestamps: false,
		tableName: 'course_types',
		// indexes: [{ unique: true, fields: ['course_id', 'type'] }],
	}
);
export default CourseType;
