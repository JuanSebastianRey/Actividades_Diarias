const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nombre: {type: String, required: true},
})

const Category = mongoose.model('Category', categorySchema, 'categorias');


module.exports = {
    Category
};