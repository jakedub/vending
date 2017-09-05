'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define('Vendor', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vendor;
};