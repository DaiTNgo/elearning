import sequelize from '../utils/connectDB';
import { DataTypes, Model } from 'sequelize';
import Topic from './topic-model';
import Course from './course-model';
class OrderTopic extends Model {
  declare topic_id: number;
  declare course_id: number;
  declare order: number;
}
OrderTopic.init(
  {
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Topic,
        key: 'topic_id',
      },
    },
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    order: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    sequelize,
    modelName: 'OrderTopic',
    timestamps: false,
    tableName: 'order_topics',
  }
);

export default OrderTopic;
