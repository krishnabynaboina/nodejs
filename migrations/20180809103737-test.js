'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Colleges', 'section', { type: Sequelize.STRING});
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Colleges', 'section')
    }
};