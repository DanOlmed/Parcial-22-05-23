const vehiculos = require('../../data/vehiculos.json');

const getAllVehiculos = (req,res) =>{
    res.status(200).json(vehiculos);
}

const getVehiculoByPatente = (req,res) =>{
    const patente = req.params.patente
    const resultado = vehiculos.find( vehiculo => vehiculo.patente == patente)
    if(resultado) {
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `El vehiculo con patente ${patente} no fue encontrado`} )
    }
}

const updateVehiculo = (req,res) => {
    const patente = req.params.patente  
    const vehiculosData = req.body 
    const indice = vehiculos.findIndex(vehiculo => vehiculo.patente == patente)
    if ( indice >= 0 ) {
        vehiculos[indice].habilitado = vehiculosData.habilitado
        vehiculos[indice].capacidad = vehiculosData.capacidad
        vehiculos[indice].autonomiaKms = vehiculosData.autonomiaKms

       
        res.status(201).json({"vehiculo": vehiculos[indice]})
    }
    else {
        res.status(404).
        json(
            {
                resultado: "La operación de actualización no pudo ser realizada",
                mensaje: `El vehiculo con patente ${patente} no fue encontrado`
            }
        )
    }

}

const createVehiculo = (req,res) =>{

}






module.exports={
    getAllVehiculos,
    getVehiculoByPatente,
    updateVehiculo,
    createVehiculo
}