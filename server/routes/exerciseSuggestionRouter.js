const express = require('express');
const router = express.Router();
const exerciseSuggestionController = require('../controllers/exerciseSuggestionController');

router.post('/:userId', exerciseSuggestionController.generateExerciseSuggestions);
router.get('/:userId/todays-data', exerciseSuggestionController.getTodaysData);

module.exports = router;