const mongoose = require('mongoose');

const objectiveSchema = new mongoose.Schema({
    usuario_fk: {type: mongoose.Schema.Types.ObjectId, require: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    fecha_de_vencimiento: {type: Date, required: true},
    estado: {type: String, required: true},
    fecha_de_creacion: {type: Date, required: true},
})

const Objective = mongoose.model('Objective', objectiveSchema, 'objetivos');


module.exports = {
    Objective
};