import { createPool } from "mysql2/promise";
import {
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} from "../configuration/configDB.js";

export const database = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
});