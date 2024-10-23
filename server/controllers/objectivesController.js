const { Objective } = require("../model/objectives.model");


exports.getObjective = async (req, res) => {
    try {
        const objective = await Objective.find({}, '-_id');
        res.json(objective);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getObjectiveById = async (req, res) => {
    try {
        const objective = await Objective.findById(req.params.id, '-_id');
        if (!objective)
            return res.status(404).json({ message: "No se encontró el objetivo" });
        res.json(objective);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}