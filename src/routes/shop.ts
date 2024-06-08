import express, { NextFunction, Request, Response } from "express";
import { ShopController } from "../controllers/shop";

export const shopRoutes = express.Router();

shopRoutes.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.redirect("/shop");
});

shopRoutes.get("/shop", ShopController.getAllProducts);

shopRoutes.get("/products/:productId", ShopController.getProductById)
shopRoutes.post("/cart", ShopController.addToCart )
shopRoutes.get("/cart", ShopController.getCart)