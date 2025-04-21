const router = require('express').Router();
const { askAssistant } = require('../controllers/assistantController');

// POST /api/assistant
router.post('/assistant', askAssistant);
module.exports = router;