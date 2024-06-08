import { RowDataPacket } from "mysql2/promise";

export interface Product extends RowDataPacket {
  id: number;
  title: string;
  price: number;
  description: string;
  image_url: string;
}

export interface CreateProductReq {
  title: string;
  price: number;
  description: string;
  image_url: string;
}
