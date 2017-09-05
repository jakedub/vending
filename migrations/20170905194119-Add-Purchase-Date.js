'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Items",
      "purchase_date",
      {
        type: Sequelize.DATE,
        allowNull: true
      }
  );
},
}
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("purchase_date");
  }
};
