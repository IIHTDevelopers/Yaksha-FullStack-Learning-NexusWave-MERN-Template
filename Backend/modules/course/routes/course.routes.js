const express = require('express');
const router = express.Router();

const CourseController = require('../controller/course.controller');
const courseController = new CourseController();

router.get('/search', courseController.searchCourse);
router.get('/category/:category', courseController.getCoursesByCategory);
router.get('/ratings/:minRating', courseController.getCoursesByRating);
router.get('/content/:id', courseController.getContent);
router.get('/', courseController.getAllCourses);
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;