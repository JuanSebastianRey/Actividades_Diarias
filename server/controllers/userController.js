const { User } = require("../model/users.model");


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUsersById = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await User.findById(id);
        if (!users) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}