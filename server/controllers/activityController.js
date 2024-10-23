const { Activity } = require("../model/activity.model");

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({}, "-_id");
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActivitiesById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id, '-_id');
    if (!activity)
      return res.status(404).json({ message: "No se encontró la actividad" });
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
