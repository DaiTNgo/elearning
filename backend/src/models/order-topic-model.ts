import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';
import Topic from './topic-model';
import Course from './course-model';
const OrderTopic = sequelize.define(
	'OrderTopic',
	{
		topic_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Topic,
				key: 'topic_id',
			},
		},
		course_id: {
			type: DataTypes.STRING(150),
			references: {
				model: Course,
				key: 'course_id',
			},
		},
		order: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
		},
	},
	{
		timestamps: false,
		tableName: 'order_topics',
	}
);

export default OrderTopic;
