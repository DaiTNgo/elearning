import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
class Instructor extends Model {
	declare name: string;
	declare acc_twitter: string;
	declare description: string;
	declare information: string;
	declare address: string;
	declare avatar: string;
}
Instructor.init(
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
		sequelize,
		modelName: 'Instructor',
		tableName: 'instructors',
	}
);

export default Instructor;
