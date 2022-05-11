import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';
console.log('---------user model--------');
const User = sequelize.define(
	'User',
	{
		email: {
			type: DataTypes.STRING(155),
			primaryKey: true,
			validate: {
				isEmail: {
					msg: 'Email not valid',
				},
			},
		},
		password: {
			type: DataTypes.STRING(75),
			allowNull: false,
			validate: {
				len: {
					msg: 'Password must be greater than 6 characters',
					args: [6, 255],
				},
			},
		},
		user_name: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
		avatar: {
			// type: DataTypes.BLOB,
			type: DataTypes.STRING,
			defaultValue: '',
		},
		description: {
			type: DataTypes.TEXT('tiny'),
			defaultValue: '',
		},
		acc_twiter: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				isUrl: {
					msg: 'Link account must be a url',
				},
			},
		},
		my_website: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				isUrl: {
					msg: 'Link website must be a url',
				},
			},
		},
	},
	{
		tableName: 'users',
		// timestamps: true,
		// indexes: [{ fields: ['id'] }],
	}
);

export default User;
