import express, { NextFunction, Request, Response } from 'express'
import { ShopController } from '../controllers/shop'

export const adminRoutes = express.Router()

adminRoutes.get("/edit-product", (req: Request, res: Response, next: NextFunction) => {
  res.render("admin/edit-product", {pageTitle: "Admin - add product", path: "/admin/edit-product"})
})

adminRoutes.post("/edit-product", ShopController.addNewProduct)