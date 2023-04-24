import { Router } from "express";
import * as productsController from "../controllers/pruductsController"

const router = Router();

router.get("/", productsController.obtenerProductos)

router.get("/:id", productsController.obtenerProductoPorId)

router.post("/", productsController.crearProducto)

router.put('/:id', productsController.actualizarProductoPorId )

router.delete('/:id', productsController.eliminarProductoPorId )
export default router;





