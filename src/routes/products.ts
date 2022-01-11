import express from "express";
import {
     add_product,
     delete_product,
     get_all_products,
     get_product,
     update_product,
} from "../controllers/products_controller";
const router = express.Router();
router.get("/", get_all_products);
router.get("/:id", get_product);
router.post("/", add_product);
router.put("/", update_product);
router.delete("/:id", delete_product);
export default router;
