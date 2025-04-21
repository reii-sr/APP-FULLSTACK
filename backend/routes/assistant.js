const router = require('express').Router();
const { askAssistant } = require('../controllers/assistantController');
router.post('/assistant', askAssistant);
module.exports = router;