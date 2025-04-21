const router = require('express').Router();
const { getReport } = require('../controllers/reportController');

// GET /api/report
router.get('/report', getReport);

module.exports = router;