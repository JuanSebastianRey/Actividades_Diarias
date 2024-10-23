const { Objective } = require("../model/objectives.model");


exports.getObjective = async (req, res) => {
    try {
        const objective = await Objective.find({}, '-_id');
        res.json(objective);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}