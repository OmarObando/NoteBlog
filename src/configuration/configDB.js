import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const DB_PORT = "3306"; //process.ennpmv.DB_PORT;
export const DB_HOST = "localhost";//process.env.DB_HOST;
export const DB_USER = "root";//process.env.DB_USER;
export const DB_PASSWORD = "aoom08";//= process.env.DB_PASSWORD;
export const DB_NAME = "noteblog";//process.env.DB_NAME;
export const TOKEN_KEY = "1234"