const reservas = require('../../data/reservas.json');

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
    const indice = reservas.findIndex( reserva => reservas.id == id )
    if(indice==-1) {
        res.status(404).
        json(
            {
            resultado: "La operación de borrado no pudo ser realizada",
            mensaje: `La reserva con id ${id} no fue encontrado`
            }
        )
    } else {
        const reserva = reservas[indice];
        const resultado = reservas.splice(indice,1)
        res.status(200)
        .json(
            {resultado: "La operación de borrado pudo realizarse con exito",
                  reserva : reserva
            }
        )
    }
}
const createReserva=(req,res)=>{

}






module.exports= {
    getAllReservas,
    getReservasByid,
    deleteReservaById,
    createReserva
}