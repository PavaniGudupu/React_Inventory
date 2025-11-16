import pkg from "pg";
import { dbConfig } from "./config.js";

const { Pool } = pkg;

export const pool = new Pool(dbConfig);

export const query = async (text, params) => {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: result.rowCount });
  return result;
};
