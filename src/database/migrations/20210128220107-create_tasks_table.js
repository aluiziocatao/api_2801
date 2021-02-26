'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('tasks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        done: {      
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        deleted: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('tasks');
  }
};
