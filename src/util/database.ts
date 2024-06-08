import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "belajar_node",
  connectionLimit: 100,
  maxIdle: 10,
  idleTimeout: 300000,
});

export const db = pool.promise()