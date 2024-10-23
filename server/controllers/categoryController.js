const { Category } = require("../model/category.model");


exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}, '-_id');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCategoriesById = async (req, res) => {
    try {
        const categories = await Category.findById(req.params.id, '-_id');
        if (!categories){
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}