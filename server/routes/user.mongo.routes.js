const express = require('express');
const router = express.Router();
const {getUsers, getUsersById} = require('../controllers/userController');
const { getActivities, getActivitiesById } = require('../controllers/activityController');
const { getReminders, getRemindersById } = require('../controllers/rememberController');
const { getObjective, getObjectiveById } = require('../controllers/objectivesController');


router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUsersById)
router.get('/actividades', getActivities)
router.get('/actividades/:id', getActivitiesById)
router.get('/recordatorios', getReminders)
router.get('/recordatorios/:id', getRemindersById)
router.get('/objetivos', getObjective)
router.get('/objetivos/:id', getObjectiveById)

module.exports = router;