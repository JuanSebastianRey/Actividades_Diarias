const { Remember } = require("../model/remember.model");


exports.getReminders = async (req, res) => {
    try {
        const reminders = await Remember.find({}, "-_id");
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getRemindersById = async (req, res) => {
    try {
        const reminder = await Remember.findById(req.params.id, '-_id');
        if (!reminder)
            return res.status(404).json({ message: "No se encontró el recordatorio" });
        res.json(reminder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}