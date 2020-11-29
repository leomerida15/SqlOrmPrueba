const router = require('express').Router();
const root = '/auth';

// controlls
const { register, login, socials } = require('../controllers/auth/');

router.post(`${root}/login`, login);
router.post(`${root}/socials`, socials);
router.post(`${root}/registro`, register);
router.post(`${root}/recupera_contra`);
router.post(`${root}/verifica_token`);
router.post(`${root}/cambia_contra`);

module.exports = router;
