import { Sequelize } from "sequelize";

export const db = new Sequelize(
  'suchi-db',
  'root',
  '',
  {
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