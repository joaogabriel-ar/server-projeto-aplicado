import express from 'express';
import productController from '../controller/product.controller.js'

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;