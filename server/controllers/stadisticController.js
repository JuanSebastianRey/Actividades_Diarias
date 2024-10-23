const { Stadistic } = require("../model/stadistic.model");


exports.getStadistic = async (req, res) => {
    try {
        const stadistic = await Stadistic.find({}, "-_id");
        res.json(stadistic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}