import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

const CourseFavourite = sequelize.define(
	'CourseFavourite',
	{
		email: {
			type: DataTypes.STRING(155),
			primaryKey: true,
		},
		course_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
	},
	{
		timestamps: false,
		tableName: 'course_favourites',
	}
);

export default CourseFavourite;
