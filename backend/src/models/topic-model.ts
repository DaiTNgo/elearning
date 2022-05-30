import sequelize from '../utils/connectDB';

import { DataTypes, Model } from 'sequelize';

class TopicModel extends Model {
  declare course_id: number;
  declare order: number;
  declare name: string;
  declare description: string;
  declare link: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}
TopicModel.init(
  {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(150),
      validate: {
        len: {
          msg: 'Name of Topic must been greater than 4 charaters',
          args: [4, 150],
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
    },
    order: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    sequelize,
    modelName: 'Topic',
    tableName: 'topics',
  }
);

export default TopicModel;
