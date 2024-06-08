import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { ErrorController } from "./controllers/error";
import { adminRoutes } from "./routes/admin";
import { shopRoutes } from "./routes/shop";
import { db } from "./util/database";
import { Product } from "./model/product-model";
import { User } from "./model/user-model";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// set public folder
app.use(express.static(path.join(__dirname, "public")));

// set template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// initialize routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// page not found
app.use(ErrorController.getNotFoundPage);


Product.belongsTo(User)
User.hasMany(Product)

const port = 3000;
db
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port:", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
