'use strict'
var fs = require('fs');
var Student = require('../models/student');
var path = require('path'); 

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: "I am in Home"
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: "I am in test route"
        });
    },

    SaveStudent: function (req, res) {
        var student = new Student();
        var params = req.body;
        student.name = params.name;
        student.Real_name = params.Real_name;
        student.email = params.email
        student.location = params.location;
        student.dif_time = params.dif_time;
        student.langs = params.langs;       
        student.age = params.age;
        student.level = params.level;
        student.platform = params.platform;
        student.motives = params.motives;
        student.goals = params.goals;
        student.interests = params.interests;
        student.music = params.music;
        student.obs = params.obs;
        student.image = params.image;

        // saving in DB
        student.save((err, studentStored) => {
            if (err) return res.status(200).send({
                message: 'error at saving'
            });
            if (!studentStored) return res.status(404).send({
                nessage: 'It could not save'
            });
            return res.status(200).send({
                student: studentStored
            });
        });

    },

    getStudent: function (req, res) {
        var studentId = req.params.id;
        Student.findById(studentId, (err, student) => {
            if (err) return res.status(500).send(
                { message: 'Error at returning data' }
            );
            if (!student) return res.status(404).send(
                { message: 'The student does not exist' }
            );
            if (studentId == null) return res.status(404).send(
                { message: 'The student is null' }
            );
            return res.status(200).send({ student });
        });
    },

    getStudents: function (req, res) {
        Student.find({}).exec((err, students) => {
            if (err) return res.status(500).send({
                message: 'error at returning data'
            });
            if (!students) return res.status(404).send({
                message: 'There is no students'
            });
            return res.status(200).send({ students });
        });
    },

    updateStudent: function (req, res) {
        var studentId = req.params.id;
        var update = req.body;

        Student.findByIdAndUpdate(studentId, update, { new: true }, (err, studentUpdated) => {
            if (err) return res.status(500).send({
                message: 'error at updating data'
            });
            if (!studentUpdated) return res.status(404).send({
                message: 'The student does not exist'
            });
            return res.status(200).send({ student: studentUpdated });
        });
    },

    deleteStudent: function (req, res) {
        var studentId = req.params.id;
        Student.findByIdAndRemove(studentId, (err, studentDeleted) => {
            if (err) return res.status(500).send({ message: 'I could not find the student' });
            if (!studentDeleted) return res.status(404).send({ message: 'I could not eliminate the student' });
            return res.status(200).send({
                student: studentDeleted
            });
        });
    },

    uploadImage: function (req, res) {
        var studentId = req.params.id;
        var fileName = 'Image no updated';

        if (req.files) {


            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Student.findByIdAndUpdate(studentId, { image: fileName }, { new: true }, (err, studentUpdated) => {
                    if (err) return res.status(500).send({ message: 'The image did not upload' });
                    if (!studentUpdated) return res.status(404).send({ message: 'The image does not exist' });
                    return res.status(200).send({
                        student: studentUpdated
                    });
                });
            }else{
                fs.unlink(filePath, (err)=>{
                    return res.status(200).send({
                        message: 'The extension is not valid'
                    });
                });
            }
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    },

    getImageFile: function(req,res){
        var file = req.params.image;
        var path_file ='./uploads/' + file;
        console.log(file); 
        console.log(path_file);

        fs.access(path_file, fs.constants.F_OK, (err)=> {
            if(err){
                return res.status(200).send({
                    message:'Could not find the image'
                });
            }else{
                return res.sendFile(path.resolve(path_file));
            }
        });
        
    }



};

module.exports = controller;
