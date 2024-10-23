const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    usuario_fk: {type: mongoose.Schema.Types.ObjectId,require: true},
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, required: true},
    prioridad: {type: String, required: true},
    fecha_de_creacion: {type: Date, required: true},
    fecha_de_actualizacion: {type: Date, required: true}
})

const Activity = mongoose.model('Activity', activitySchema, 'actividades');


module.exports = {
    Activity
};