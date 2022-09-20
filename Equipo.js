const mongoose = require('mongoose')


const equiposSchema = new mongoose.Schema({
    clasificacion: Number,
    nombre: String,
    pj:Number,
    goles:Number,
    e:Number,
    p:Number,
    puntos:Number,
    escudo:String

})
module.exports = mongoose.model("Equipo",equiposSchema)