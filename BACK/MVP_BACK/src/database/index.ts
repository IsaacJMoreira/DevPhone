
import SequelizeDatabase from "./SequelizeDatabase";
import "dotenv/config"

interface Config {
  [key: string]: any
}

const config: Config = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_CONFIG: {
    dialect: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
}



const db = new SequelizeDatabase(config.DB_NAME, config.DB_USER, config.DB_PASS, config.DB_CONFIG)

export { db }