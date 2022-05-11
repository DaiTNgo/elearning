import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

console.log('---------instructors model--------');
const Instructor = sequelize.define(
	'Instructor',
	{
		name: {
			type: DataTypes.STRING(50),
			primaryKey: true,
			validate: {
				len: {
					msg: 'Name must be greater than 2 characters',
					args: [2, 50],
				},
			},
		},
		acc_twitter: {
			type: DataTypes.STRING(150),
			defaultValue: '',
			validate: {
				isUrl: {
					msg: 'Link account must be a url',
				},
			},
		},
		description: {
			type: DataTypes.TEXT('tiny'),
			defaultValue: '',
		},
		information: {
			// work and favourite
			type: DataTypes.TEXT('tiny'),
			defaultValue: '',
		},
		address: {
			type: DataTypes.STRING(150),
			defaultValue: '',
		},
		avatar: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
	},
	{
		tableName: 'instructors',
	}
);

export default Instructor;
