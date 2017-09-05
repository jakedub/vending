'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Items",
      "customerId",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Customers",
          key: "id"
        }
      },
      "Items",
      "vendorId",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Vendors",
          key: "id"
      }
    }
  );
},

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Likes", "customerId", "messageId");
  }
};
