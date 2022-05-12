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
			type: DataTypes.INTEGER,
			primaryKey: true,
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
		// indexes: [{ unique: true, fields: ['course_id', 'order'] }],
	}
);

export default OrderTopic;
