import { Request, Response } from "express";

export function getProducts(req: Request, res: Response) {
  res.send("products");
}

export function getProduct(req: Request, res: Response) {
  res.send("product");
}

export function saveProduct(req: Request, res: Response) {
  res.send("create product");
}

export function updateProduct(req: Request, res: Response) {
  res.send("update product");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("update product");
}
