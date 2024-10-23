const { Hito } = require("../model/hito.model");


exports.getHitos = async (req, res) => {
    try {
        const hitos = await Hito.find({}, "-_id");
        res.json(hitos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getHitosById = async (req, res) => {
    try {
        const hitos = await Hito.findById(req.params.id, '-_id');
        if (!hitos){
            return res.status(404).json({ message: "No se encontró el hito" });
        }
        res.json(hitos)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}