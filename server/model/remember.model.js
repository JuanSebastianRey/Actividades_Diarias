const mongoose = require('mongoose');

const rememberSchema = new mongoose.Schema({
    actividades_fk: {type: mongoose.Schema.Types.ObjectId, require:true},
    fecha_de_recordatorio:{type: Date, require:true},
    mensaje: {type: String, require:true}
})

const Remember = mongoose.model('Remember', rememberSchema, 'recordatorios');


module.exports = {
    Remember
};