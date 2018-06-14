

import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { database } from '../config';

export default new Sequelize({
  username: database.username,
  password: database.password,
  database: database.database,
  host: database.host,
  dialect: database.dialect,
  logging: database.logging,
  operatorsAliases: false,
  modelPaths: [
    `${__dirname}/model/[^index]*`,
  ],
  pool: {
    max: 50,
    min: 0,
    idle: 5000,
    acquire: 5000,
  }
});
