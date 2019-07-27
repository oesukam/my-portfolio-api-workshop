'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('educations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      school: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      fromYear: {
        type: Sequelize.DATE
      },
      toYear: {
        type: Sequelize.DATE
      },
      major: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('educations');
  }
};
