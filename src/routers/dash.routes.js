const router = require('express').Router();
const root = '/dashboard';

// controlls
const dashboard = require('../controllers/dashboard');

router.get(`${root}/`, dashboard);

module.exports = router;
