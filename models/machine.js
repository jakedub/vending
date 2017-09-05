'use strict';
module.exports = function(sequelize, DataTypes) {
  var Machine = sequelize.define('Machine', {
    total: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Machine;
};