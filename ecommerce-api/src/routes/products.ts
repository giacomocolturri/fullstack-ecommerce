import { Router } from "express";
import {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "./../controllers/productsController";
import { validateData } from "../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema } from "../db/productsSchema";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validateData(createProductSchema), saveProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
