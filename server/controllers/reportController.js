const { Report } = require("../model/report.model");


exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find({}, "-_id");
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id, '-_id')
        if (!report){
            return res.status(404).json({ message: "No se encontró el reporte" });
        }
        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}