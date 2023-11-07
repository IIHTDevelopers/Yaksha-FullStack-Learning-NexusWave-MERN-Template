const express = require('express');
const router = express.Router();

const GradeController = require('../controller/grade.controller');

const gradeController = new GradeController();

router.get('/courseGrade/:instructorId', gradeController.getAllCourseAvg);
router.get('/course/:courseId', gradeController.getGradesForStudentsInCourse);
router.get('/:instructorId', gradeController.getAllGrades);
router.get('/:studentId', gradeController.getAllGradesForAStudent);
router.get('/:studentId/:courseId', gradeController.getGradesForStudentInCourse);
router.put('/:studentId/:courseId', gradeController.updateGradesForStudentInCourse);
router.post('/:studentId/:courseId', gradeController.assignGradesForStudentInCourse);

module.exports = router;