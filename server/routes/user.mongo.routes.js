const express = require('express');
const router = express.Router();
const {getUsers, getUsersById} = require('../controllers/userController');
const { getActivities, getActivitiesById } = require('../controllers/activityController');
const { getReminders, getRemindersById } = require('../controllers/rememberController');
const { getObjective, getObjectiveById } = require('../controllers/objectivesController');
const { getLabels, getLabelsById } = require('../controllers/labelController');
const { getCategories, getCategoriesById } = require('../controllers/categoryController');
const { getHitos, getHitosById } = require('../controllers/hitoController');
const { getStadistic, getStadisticById } = require('../controllers/stadisticController');


router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUsersById)
router.get('/actividades', getActivities)
router.get('/actividades/:id', getActivitiesById)
router.get('/recordatorios', getReminders)
router.get('/recordatorios/:id', getRemindersById)
router.get('/objetivos', getObjective)
router.get('/objetivos/:id', getObjectiveById)
router.get('/etiquetas', getLabels)
router.get('/etiquetas/:id', getLabelsById)
router.get('/categorias', getCategories)
router.get('/categorias/:id', getCategoriesById)
router.get('/hitos', getHitos)
router.get('/hitos/:id', getHitosById)
router.get('/estadisticas', getStadistic)
router.get('/estadisticas/:id', getStadisticById)

module.exports = router;