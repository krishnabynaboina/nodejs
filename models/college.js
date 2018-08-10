'use strict';
module.exports = (sequelize, DataTypes) => {
  var College = sequelize.define('College', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  College.associate = function(models) {
    // associations can be defined here
  };
  return College;
};