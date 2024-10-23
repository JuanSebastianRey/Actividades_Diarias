const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombres_usuario: {type: String, required: true},
    email: {type: String, required: true},
    fecha_de_creacion: {type: Date, required:true},
});

const User = mongoose.model('User', userSchema, 'usuarios');


module.exports = {
    User
};