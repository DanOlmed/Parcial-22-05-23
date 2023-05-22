const express= require('express');
const reservaController= require('../controllers/reserva.controller');
const router = express.Router();

router.get('/api/reservas', reservaController.getAllReservas);
router.get('/api/reservas/:id',reservaController.getReservasByid);
router.delete('/api/reservas/:id', reservaController.deleteReservaById);



module.exports={router};