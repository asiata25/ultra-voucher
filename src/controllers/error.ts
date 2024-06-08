import { NextFunction, Request, Response } from "express";

export class ErrorController {
 static getNotFoundPage(req: Request, res: Response, next: NextFunction) {
  res.status(404).render("404", { pageTitle: "Not Found!", path: "not found" });
};
}
