import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

const OrderTopic = sequelize.define(
	'OrderTopic',
	{
		topic_id: {
			type: DataTypes.INTEGER,
		},
		course_id: {
			type: DataTypes.STRING(150),
			primaryKey: true,
		},
		order: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
		},
	},
	{
		timestamps: false,
		tableName: 'order-topics',
	}
);

export default OrderTopic;
