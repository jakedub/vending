'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    "Items",
    "userId",
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
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
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Items", "vendorId", "userId");
  }
};
