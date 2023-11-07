const express = require('express');
const router = express.Router();

const AssignmentController = require('../controller/assignment.controller');
const assignmentController = new AssignmentController();

router.get('/', assignmentController.getAllAssignmentsForInstructorOrStudent);
router.post('/', assignmentController.createAssignment);
router.get('/submitted', assignmentController.submittedAssignmentByInstructorOrStudent);
router.get('/unsubmitted', assignmentController.unsubmittedAssignmentByInstructorOrStudent);
router.post('/submit', assignmentController.submitAssignment);
router.get('/stutus/:id', assignmentController.getSubmissionStatus);
router.get('/search', assignmentController.searchAssignment);

module.exports = router;