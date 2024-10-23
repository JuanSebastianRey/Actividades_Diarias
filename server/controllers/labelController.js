const { Label } = require("../model/label.model");


exports.getLabels = async (req, res) => {
    try {
        const labels = await Label.find({}, '-_id');
        res.json(labels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getLabelsById = async (req,res) => {
    try {
        const label = await Label.findById(req.params.id, '-_id');
        if (!label)
            return res.status(404).json({ message: "No se encontró la etiqueta" });
        res.json(label);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}