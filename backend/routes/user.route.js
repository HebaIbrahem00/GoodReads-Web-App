const router = require('express').Router();
const validateRrgister = require('../utils/register_validator')

const auth = require('../controllers/auth.controller');

router.post('/signup', validateRrgister, auth.signUp);

router.post('/login', auth.login);


module.exports = router;