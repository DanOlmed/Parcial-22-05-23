const reservas = require('../../data/reservas.json');
const vehiculos = require('../../data/vehiculos.json')

const getAllReservas= (req,res)=>{
    res.status(200).json(reservas);
}

const getReservasByid= (req,res)=>{
    const id = req.params.id
    const resultado = reservas.find( reserva => reserva.id == id)
    if(resultado) {
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `La reserva con id ${id} no fue encontrado`} )
    }
}

const deleteReservaById=(req,res)=> {
    const id = req.params.id
    const indice = reservas.findIndex( reserva => reserva.id == id )
    
    if(indice >-1) {
        const reserva = reservas[indice];
        const resultado = reservas.splice(indice,1)
        res.status(200)
        .json(
            {resultado: "La operación de borrado pudo realizarse con exito",
                  reserva : reserva
            }
        )
        res.status(404).
        json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `La reserva con id ${id} no fue encontrado`
            }
        )
    } else {
        res.status(404).
        json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `La reserva con id ${id} no fue encontrado`
            }
        )
    }
}
const createReserva=(req,res)=>{
    const reservaData = req.body
    const ids = reservas.map( e => e.id)
    const maxId = reservas.length > 0 ? Math.max(...ids) + 1 : 1
    const longitudFecha = reservaData.fecha.length
    if(reservaData.cantPersonas>10 || reservaData.cantPersonas<1){
        res.status(400).json(`la cantidad de personas no esta dentro de los parametros aceptados, se permiten de 1 a 10 pasajeros maximo`)
    } else{
        if(reservaData.distancia >500 || reservaData.distancia<=0){
            res.status(400).json(`La distancia ${reservaData.distancia} no esta dentro de los parametros aceptados, se permiten de 1 a 500 kms inclusive`)
            
        }
        if(longitudFecha!==8){
            res.status(400).json(`La fecha ingresada debe tener 8 caracteres`)
        }
        
        const vehiculo = vehiculos.find(ve => ve.autonomiaKms<=reservaData.distancia&&ve.capacidad<=reservaData.cantPersonas)

        reservas.push({id: maxId, cliente:reservaData.cliente, cantPersonas:reservaData.cantPersonas,distancia:reservaData.distancia,fecha:reservaData.fecha, vehiculo: vehiculo})
        res.status(201).json({mensaje: "reserva creada exitosamente"})

    }

}






module.exports= {
    getAllReservas,
    getReservasByid,
    deleteReservaById,
    createReserva
}