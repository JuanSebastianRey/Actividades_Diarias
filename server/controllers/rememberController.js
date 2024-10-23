const { Remember } = require("../model/remember.model");


exports.getReminders = async (req, res) => {
    try {
        const reminders = await Remember.find({}, "-_id");
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}