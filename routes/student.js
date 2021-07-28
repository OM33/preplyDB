'use strict'

var express = require('express');
var StudentController = require('../controllers/student');
var router = express.Router();
router.get('/home', StudentController.home);
router.post('/test', StudentController.test);

module.exports = router;