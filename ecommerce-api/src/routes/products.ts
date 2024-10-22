import { Router } from "express";
import {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "./../controllers/productsController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
