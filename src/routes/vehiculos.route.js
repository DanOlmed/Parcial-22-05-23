const express= require('express');
const vehiculosController= require('../controllers/vehiculos.controller');
const router = express.Router();

router.get('/api/vehiculos', vehiculosController.getAllVehiculos);
router.get('/api/vehiculos/:patente',vehiculosController.getVehiculoByPatente);
router.put('/api/vehiculos/:patente', vehiculosController.updateVehiculo);



module.exports={router};