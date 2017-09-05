'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(models.Customer, {foreignKey: 'customerId'})
        Item.belongsTo(models.Vendor, {foreignKey: 'vendorId'})
      }
    }
  });
  return Item;
};
