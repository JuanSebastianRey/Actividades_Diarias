const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema({
    actividades_fk: {type: mongoose.Schema.Types.ObjectId, require:true},
    nombre: {type: String, require:true},
    categoria_fk: {type: mongoose.Schema.Types.ObjectId, require:true}
})

const Label = mongoose.model('Label', labelSchema, 'etiquetas');


module.exports = {
    Label
};