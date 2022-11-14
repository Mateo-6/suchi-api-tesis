"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('suchi-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
/* export class DataBase {
  constructor() {
    const db = {
      persona: Persona(this.dbConnection),
    };
  }

  async dbConnection() {
    const sequelize = new Sequelize(
      'suchi-db',
      'root',
      '',
      {
        host: 'localhost',
        dialect: 'mysql'
      });

    return sequelize;
  }
} */ 
