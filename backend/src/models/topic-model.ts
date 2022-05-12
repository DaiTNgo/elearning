import sequelize from '../utils/connectDB';
import { DataTypes, Model } from 'sequelize';

class Topic extends Model {
  declare topic_id: number;
  declare name: string;
  declare description: string;
  declare time_second: number;
}
Topic.init(
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
    sequelize,
    modelName: 'Topic',
    tableName: 'topics',
  }
);

export default Topic;
