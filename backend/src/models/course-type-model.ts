import { DataTypes } from 'sequelize';

import sequelize from '../utils/connectDB';

const CourseType = sequelize.define(
	'CourseType',
	{
		course_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
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
	}
);
export default CourseType;
