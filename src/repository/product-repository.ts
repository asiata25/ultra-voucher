import { CreateProductReq, Product } from "../model/product-model";
import { db } from "../util/database";

export class ProductRepository {
  static getAll() {
    return db.query<Product[]>("SELECT * FROM products");
  }

  static save(product: CreateProductReq) {
    return db.execute(
      "INSERT INTO products (title, price, description, image_url) VALUES (?, ?, ?, ?)",
      [product.title, product.price, product.description, product.image_url]
    );
  }
}
