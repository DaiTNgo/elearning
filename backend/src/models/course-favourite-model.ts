import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';
import Course from './course-model';
import User from './user-model';
const CourseFavourite = sequelize.define(
	'CourseFavourite',
	{
		email: {
			type: DataTypes.STRING(155),
			references: {
				model: User,
				key: 'email',
			},
		},
		course_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Course,
				key: 'course_id',
			},
		},
	},
	{
		timestamps: false,
		tableName: 'course_favourites',
	}
);

export default CourseFavourite;
