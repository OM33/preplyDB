'use strict'

var express = require('express');
var StudentController = require('../controllers/student');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'}); 
var router = express.Router();

router.get('/home', StudentController.home);
router.post('/test', StudentController.test);
router.post('/save-student', StudentController.SaveStudent);
router.get('/get-student/:id?', StudentController.getStudent);
router.get('/get-students/', StudentController.getStudents);
router.put('/student/:id', StudentController.updateStudent);
router.delete('/student/:id', StudentController.deleteStudent);
router.post('/upload-image/:id', multipartMiddleware, StudentController.uploadImage);
router.get('/get-image/:image', StudentController.getImageFile);
router.get('**', StudentController.home)


module.exports = router;