import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

console.log('---------topic model--------');
const Topic = sequelize.define(
  'Topic',
  {
    // topic_id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATEONLY, // ??? check
      allowNull: false,
    },
  },
  {
    tableName: 'topics',
    // indexes: [{ fields: ['course_id', 'order'] }],
  }
);

export default Topic;
