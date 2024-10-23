const { Category } = require("../model/category.model");


exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}, '-_id');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}