const mongoose = require('mongoose')


const equiposSchema = new mongoose.Schema({
    clasificacionE: Number,
    nombreE: String,
    pjE:Number,
    golesE:Number,
    eE:Number,
    pE:Number,
    puntosE:Number

})
module.exports = mongoose.model("Equipos",equiposSchema)