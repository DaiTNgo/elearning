import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

console.log('---------topic model--------');
const Topic = sequelize.define(
	'Topic',
	{
		topic_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(150),
			validate: {
				len: {
					msg: 'Name of Topic must been greater than 10 charaters',
					args: [10, 100],
				},
			},
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT('tiny'),
			defaultValue: '',
		},
		time_second: {
			type: DataTypes.INTEGER.UNSIGNED, // ??? check
			allowNull: false,
			validate: {
				min: 1,
			},
		},
	},
	{
		tableName: 'topics',
	}
);

export default Topic;
