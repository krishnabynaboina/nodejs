'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Users', 'section', { type: Sequelize.STRING});
  },
  down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Users', 'section')
  }
};
