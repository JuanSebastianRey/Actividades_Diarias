const express = require('express');
const router = express.Router();
const {getUsers, getUsersById} = require('../controllers/userController');

router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUsersById)

module.exports = router;