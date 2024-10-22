import { Request, Response } from "express";
import { db } from "../db/index";
import { productsTable } from "../db/productsSchema";
import { eq } from "drizzle-orm";

export async function getProducts(req: Request, res: Response) {
  try {
    const products = db.select().from(productsTable);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to get products!");
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, +req.params.id));

    if (!product) {
      return res.status(404).send("Product not found!");
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to get product!");
  }
}

export async function saveProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to create a new product!");
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const [updatedProduct] = await db
      .update(productsTable)
      .set(req.body)
      .where(eq(productsTable.id, +req.params.id))
      .returning();

    if (!updatedProduct) {
      return res.status(404).send("Product not found!");
    }

    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to update product!");
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, +req.params.id))
      .returning();
    if (!deletedProduct) {
      return res.status(404).send("Product not found!");
    }
    res.send("Product deleted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete product!");
  }
}
