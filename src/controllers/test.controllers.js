import { database } from "../schema/connection.js";

export const ping = Promise.resolve(database.query("SELECT 1 + 1 AS result"));
