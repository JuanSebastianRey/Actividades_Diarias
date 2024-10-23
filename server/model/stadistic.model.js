const mongoose = require('mongoose');

const stadisticSchema = new mongoose.Schema({
    usuario_fk: {type: mongoose.Schema.Types.ObjectId, require:true},
    fecha_de_la_estadistica: {type: Date, require:true},
    actividades_completadas: {type: Number, require:true},
    objetivos_completados: {type: Number, require:true},
})

const Stadistic = mongoose.model('Stadistic', stadisticSchema, 'estadisticas');


module.exports = {
    Stadistic
};