const mongoose = require('mongoose')


const equipos = new mongoose.Schema({
    clasificacionE: Number,
    nombreE: String,
    pjE:Number,
    golesE:Number,
    eE:Number,
    pE:Number,
    puntosE:Number

})
mongoose.model("Equipos",equipos)