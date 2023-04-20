import { Router } from "express";
import * as productsController from "../controllers/pruductsController"

const router = Router();

router.get("/", productsController.obtenerProductos)

router.get("/:id", productsController.obtenerProductoPorId)

router.post("/", productsController.crearProducto)

router.put("/", productsController.actualizarProductoPorId)

router.delete("/", productsController.eliminarProductoPorId)

export default router;




