/* tslint:disable:object-literal-sort-keys */

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'testdb',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: 'postgresql',
    logging: false, //console.log,
    migrationStorageTableName: 'sequelize_meta',
    seederStorageTableName: 'sequelize_data',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'testdb',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: 'postgresql',
    logging: false,
    migrationStorageTableName: 'sequelize_meta',
    seederStorageTableName: 'sequelize_data',
    seederStorage: 'sequelize',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgresql',
    logging: false, // todo: change this to winston
    migrationStorageTableName: 'sequelize_meta',
    seederStorageTableName: 'sequelize_data',
    seederStorage: 'sequelize',
  },
};
