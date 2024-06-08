import { DataTypes, Model } from "sequelize";
import { db } from "../util/database";

export class Product extends Model {
  declare id: number;
  declare title: string;
  declare price: number;
  declare description: string;
  declare imageUrl: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "image_url"
    },
  },
  {
    sequelize: db,
    tableName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true,
    deletedAt: "deleted_at",
  }
);

export interface CreateProductRequest {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}
