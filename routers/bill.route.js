import express from 'express';
import billController from '../controller/bill.controller.js'

const router = express.Router();

router.post('/', billController.createBill);
router.get('/:id', billController.getBill);
router.put('/', billController.updateBill);
router.delete('/:id', billController.deleteBill);

export default router;