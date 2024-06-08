import { CreateProductRequest, Product } from "../model/product-model";

export class ProductRepository {
  static getAll() {
    return Product.findAll({
      attributes: ["id", "title", "description", "price", "image_url"],
    });
  }

  static save(product: CreateProductRequest) {
    return Product.create({
      title: product.title,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
  }
}
