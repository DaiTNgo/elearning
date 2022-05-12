import sequelize from '../utils/connectDB';
import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
	declare email: string;
	declare password: string;
	declare user_name: string;
	declare avatar: string;
	declare description: string;
	declare acc_twiter: string;
	declare my_website: string;
	declare role: 'user' | 'admin' | 'instructor';
}
User.init(
	{
		email: {
			primaryKey: true,
			type: DataTypes.STRING(155),
			validate: {
				isEmail: {
					msg: 'Email not valid',
				},
			},
		},
		role: {
			primaryKey: true,
			type: DataTypes.STRING('20'),
			defaultValue: 'user',
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
			allowNull: true,
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
		},
		my_website: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
	},
	{
		modelName: 'User',
		sequelize,
		tableName: 'users',
	}
);

User.beforeCreate(async (user, options) => {
	const hashed = await bcrypt.hash(user.password, 10);
	user.password = hashed;
});

// User.beforeSave(async (user, options) => {
//   if (user.updatePassword) {
//     const hashed = await bcrypt.hash(user.password, 10);
//     user.password = hashed;
//   }
// });

export default User;
