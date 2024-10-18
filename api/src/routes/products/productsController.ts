import { Request, Response } from "express";
export function listProducts(req: any, res: Response) {
  res.send("List of products");
}

export function getProductById(req: Request, res: Response) {
  res.send("Product by Id");
}

export function createProduct(req: Request, res: Response) {
  res.send("create Products");
}
export function updateProduct(req: Request, res: Response) {
  res.send("update Products");
}
export function deleteProduct(req: Request, res: Response) {
  res.send("deleted product");
}
