import express from 'express';
import summaryController from '../controller/summary.controller.js'

const router = express.Router();

router.post('/', summaryController.createSummary);
// router.get('/:id', summaryController.getProduct);
// router.put('/', summaryController.updateProduct);
// router.delete('/:id', summaryController.deleteProduct);

export default router;