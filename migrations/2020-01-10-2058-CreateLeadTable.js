"use-strict";

module.exports = {
  // creates the table, runs the migration
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Leads", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  // drops the table, rollback the migration
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Leads");
  },
};
