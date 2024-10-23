const express = require('express');
const router = express.Router();
const {getUsers, getUsersById} = require('../controllers/userController');
const { getActivities, getActivitiesById } = require('../controllers/activityController');
const { getReminders } = require('../controllers/rememberController');


router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUsersById)
router.get('/actividades', getActivities)
router.get('/actividades/:id', getActivitiesById)
router.get('/recordatorios', getReminders)

module.exports = router;