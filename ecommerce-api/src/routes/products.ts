import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("products");
});

router.get("/:id", (req, res) => {
  console.log("single product");
});

router.post("/", (req, res) => {
  console.log("product created");
});

export default router;
