const mongoose = require('mongoose');

const hitoSchema = new mongoose.Schema({
    onjetivo_fk: {type: mongoose.Schema.Types.ObjectId, require:true},
    descripcion: {type: String, required:true},
    fecha_de_creacion: {type: Date, required:true},
    completado: {type: mongoose.Schema.Types.Boolean, required:true}
});

const Hito = mongoose.model('Hit', hitoSchema, 'hitos');


module.exports = {
    Hito
};