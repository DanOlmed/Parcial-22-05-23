const express= require('express');
const vehiculosController= require('../controllers/vehiculos.controller');
const router = express.Router();

router.get('/', vehiculosController.getAllVehiculos);
router.get('/:patente',vehiculosController.getVehiculoByPatente);
router.put('/:patente', vehiculosController.updateVehiculo);
router.post('/',vehiculosController.createVehiculo)



module.exports={router};