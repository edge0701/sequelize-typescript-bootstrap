import {
    QueryInterface,
    SequelizeStatic,
} from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      given_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },

      last_name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },

      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(254),
      },

      email_verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      org_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'org',
          key: 'id',
        },
      },

      password: {
        allowNull: true,
        type: Sequelize.STRING(60),
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
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.dropTable('user');
  },
};
