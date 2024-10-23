const { Label } = require("../model/label.model");


exports.getLabels = async (req, res) => {
    try {
        const labels = await Label.find({}, '-_id');
        res.json(labels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}