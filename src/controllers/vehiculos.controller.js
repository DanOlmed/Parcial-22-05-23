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
    const vehiculosData = req.body
    const existe = vehiculos.find(vehiculo => vehiculo.patente == vehiculosData.patente)
   
    if (!existe) {
        const longitudPatente = vehiculosData.patente.length
        if(longitudPatente===7){   
        
        if( ! vehiculosData.habilitado)
            vehiculosData.habilitado = false
    
        if (vehiculosData.capacidad<=1 || vehiculosData.capacidad>=10 || vehiculosData.autonomiaKms<=0) {
            res.status(400).json({mensaje: `No se puede registrar el vehiculo con patente ${vehiculosData.patente} por no cumplir con las especificaciones: capacidad entre 1 y 10 pasajeros y autonomia en kms mayor a 0`})    
        } else  {
            vehiculos.push(vehiculosData)
            res.status(201).json({mensaje: `El vehiculo con patente ${vehiculosData.patente} fue creado correctamente`})
        }}else{
            res.status(400).json({mensaje: "la pantente debe tener una longitud de 7 caracteres"})
        }
    } else {
        res.status(400).json({mensaje: `El vehiculo con pantente ${vehiculosData.patente} ya existe en la base de datos`})
    }

}






module.exports={
    getAllVehiculos,
    getVehiculoByPatente,
    updateVehiculo,
    createVehiculo
}