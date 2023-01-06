import express from 'express';
import guestController from '../controller/guest.controller.js'

const router = express.Router();

router.post('/', guestController.createGuest);
router.get('/:id', guestController.getGuest);
router.put('/', guestController.updateGuest);
router.delete('/:id', guestController.deleteGuest);

export default router;