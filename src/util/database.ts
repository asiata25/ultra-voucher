import { Sequelize } from "sequelize";
import { Product } from "../model/product-model";
import { User } from "../model/user-model";

export const db = new Sequelize({
  database: "belajar_node",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
