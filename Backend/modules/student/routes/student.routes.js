const express = require('express');
const router = express.Router();

const StudentController = require('../controller/student.controller');
const studentController = new StudentController();

router.post('/login', studentController.loginStudent);
router.get('/search', studentController.searchStudent);
router.post('/review', studentController.addReview);
router.get('/popularCourses', studentController.getAllPopularCourses);
router.get('/enrolled/:instructorId', studentController.getAllStudents);
router.get('/:id', studentController.getStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.post('/', studentController.createStudent);

module.exports = router;