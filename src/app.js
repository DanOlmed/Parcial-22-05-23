const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

const reservasRouter= require('./routes/reserva.route');

app.use(express.json());
app.use('/api/reservas', reservasRouter.router);


app.listen(PORT, ()=>{console.log(`App lista escuhando en el puerto ${PORT}`)} )