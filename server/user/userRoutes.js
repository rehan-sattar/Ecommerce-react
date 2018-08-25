const express = require('express');
const router  = express.Router();

const controller = require('./userControllers');

router.post('/signUp', controller.signUpAttempt);
router.post('/signIn', controller.signInAttempt);
router.post('/delete/:id', controller.deleteUserAttempt);
router.get('/getAllUsers', controller.getAllUsers);

module.exports = router;


link : 'loca'