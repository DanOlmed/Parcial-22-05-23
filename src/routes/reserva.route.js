const express= require('express');
const reservaController= require('../controllers/reserva.controller');
const router = express.Router();

router.get('/', reservaController.getAllReservas);
router.get('/:id',reservaController.getReservasByid);
router.delete('/:id', reservaController.deleteReservaById);
router.post('/',reservaController.createReserva)



module.exports={router};