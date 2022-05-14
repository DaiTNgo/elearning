import sequelize from '../utils/connectDB';
import { DataTypes, Model } from 'sequelize';

class TopicModel extends Model {
  declare topic_id: number;
  declare course_id: number;
  declare order: number;
  declare name: string;
  declare description: string;
  declare link: string;
}
TopicModel.init(
  {
    topic_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(150),
      validate: {
        len: {
          msg: 'Name of Topic must been greater than 4 charaters',
          args: [4, 100],
        },
      },
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      defaultValue: '',
    },
    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'Link must be a url',
        },
      },
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Topic',
    tableName: 'topics',
  }
);

export default TopicModel;
