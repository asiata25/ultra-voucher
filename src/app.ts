import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { adminRoutes } from "./routes/admin";
import { shopRoutes } from "./routes/shop";
import { ErrorController } from "./controllers/error";
import { db } from "./util/database";

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

const port = 3000;
app.listen(port, () => {
  console.log("listening on port:", port);
});
