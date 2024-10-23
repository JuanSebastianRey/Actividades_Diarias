const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    usuario_fk: {type: mongoose.Schema.Types.ObjectId, require: true},
    tipo_reporte: {type: String, require: true},
    fecha_de_inicio: {type: Date, required: true},
    fecha_de_fin: {type: Date, required: true},
    actividades_completadas: {type: Number, required: true},
    objtivos_completados: {type: Number, required: true},
})

const Report = mongoose.model('Report', reportSchema, 'reportes');

module.exports = {
    Report
}