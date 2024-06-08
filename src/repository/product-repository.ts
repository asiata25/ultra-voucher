import { getDb } from "../util/database";

export class ProductRepository {
  static getAll() {
    const db = getDb()
    return db.collection("products").find().toArray()
  }

  static save() {
  }
}
