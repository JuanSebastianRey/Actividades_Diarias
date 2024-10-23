const { Report } = require("../model/report.model");


exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find({}, "-_id");
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}