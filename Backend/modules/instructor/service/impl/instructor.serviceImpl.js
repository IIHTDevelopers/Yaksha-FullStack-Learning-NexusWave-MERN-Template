const InstructorService = require('../instructor.service');

class InstructorServiceImpl extends InstructorService {
    async loginInstructor(email, password) {
        // write your logic here
        return null;
    }

    async getAllInstructors() {
        // write your logic here
        return null;
    }

    async createInstructor(instructorData) {
        // write your logic here
        return null;
    }

    async getInstructor(instructorId) {
        // write your logic here
        return null;
    }

    async updateInstructor(instructorId, updatedInstructor) {
        // write your logic here
        return null;
    }

    async deleteInstructor(instructorId) {
        // write your logic here
        return null;
    }

    async getAllCourses(instructorId) {
        // write your logic here
        return null;
    }

    async getCourse(courseId, instructorId) {
        // write your logic here
        return null;
    }

    async updateCourse(courseId, instructorId, courseDetails) {
        // write your logic here
        return null;
    }

    async deleteCourse(courseId, instructorId) {
        // write your logic here
        return null;
    }

    async getCourseInsights(instructorId) {
        // write your logic here
        return null;
    }

    async getAverageGrade(instructorId) {
        // write your logic here
        return null;
    }
}

module.exports = InstructorServiceImpl;