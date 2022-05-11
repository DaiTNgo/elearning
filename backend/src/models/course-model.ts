import { DataTypes } from 'sequelize';

import sequelize from '../utils/connectDB';

console.log('---------course model--------');
const Course = sequelize.define(
	'Course',
	{
		course_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		price: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
			allowNull: false,
		},
		instructor_name: {
			type: DataTypes.STRING(50),
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
	},
	{
		tableName: 'courses',
	}
);
export default Course;
