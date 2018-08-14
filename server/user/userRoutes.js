const express = require('express');
const router  = express.Router();

const contoller = require('./userControllers');

router.post('/signUp', contoller.signUpAttempt);
router.post('/signIn', contoller.signInAttempt);
module.exports = router;