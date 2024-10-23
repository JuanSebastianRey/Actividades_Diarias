const { Activity } = require("../model/activity.model");


exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({},'-_id');
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}