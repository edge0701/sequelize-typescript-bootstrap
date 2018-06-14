import {
    QueryInterface,
    SequelizeStatic,
} from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable('org',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        name: {
          allowNull: false,
          type: Sequelize.STRING(40),
        },

        created_at: {
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          type: Sequelize.DATE,
        },

        updated_at: {
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          type: Sequelize.DATE,
        },

        deleted_at: {
          type: Sequelize.DATE,
        },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.dropTable('org');
  },
};
