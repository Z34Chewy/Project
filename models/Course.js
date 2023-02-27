const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      course_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      professor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credits: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'course',
    }
  );
  
  module.exports = Course;