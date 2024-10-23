const { Stadistic } = require("../model/stadistic.model");


exports.getStadistic = async (req, res) => {
    try {
        const stadistic = await Stadistic.find({}, "-_id");
        res.json(stadistic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getStadisticById = async (req,res) => {
    try {
        const stadistic = await Stadistic.findById(req.params.id, '-_id')
        if (!stadistic){
            return res.status(404).json({ message: "No se encontró la estadística" });
        }
        res.json(stadistic)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 