const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const mySchema = new Schema({
    carro: String,
    moto:String,
    carroMes:String,
    motoMes:String,
    nombre:String,
    nit:String,
    direccion:String,
    telefono:String,
    capacidadM:String,
    capacidadC:String,
})

const model=mongoose.model('price', mySchema);
module.exports=model;