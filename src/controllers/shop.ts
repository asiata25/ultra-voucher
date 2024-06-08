import { NextFunction, Request, Response } from "express";
import { ProductRepository } from "../repository/product-repository";

export class ShopController {
  static getAllProducts(req: Request, res: Response, next: NextFunction) {
    ProductRepository.getAll().then(([products]) => {
      res.render("shop/product-list", {
        pageTitle: "Shopiingg",
        path: "/shop",
        products
      });
    }).catch(err => console.log(err));
  }

  static addNewProduct(req: Request, res: Response, next: NextFunction) {
    const title = req.body.title
    const price = +req.body.price
    const description = req.body.description
    const image_url = req.body.image_url
    
    ProductRepository.save({title, price, description, image_url}).then(() => {
      res.redirect("/")
    }).catch(err => console.log(err))
  }

  static getProductById(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    res.render("shop/product-detail", {
      pageTitle: "Product " + productId,
      path: "product/:productId",
    });
  }

  static getCart(req: Request, res: Response, next: NextFunction) {
    res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
  }

  static addToCart(req: Request, res: Response, next: NextFunction) {
    const productId = req.body.productId;
    console.log(productId);
    res.redirect("/cart");
  }
}
