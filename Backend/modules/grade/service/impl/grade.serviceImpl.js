const GradeService = require("../grade.service");

class GradeServiceImpl extends GradeService {
    async getAllGrades(instructorId) {
        // write your logic here
        return null;
    }

    async getAllGradesForAStudent(studentId) {
        // write your logic here
        return null;
    }

    async getGradesForStudentInCourse(studentId, courseId) {
        // write your logic here
        return null;
    }

    async getGradesForStudentsInCourse(courseId) {
        // write your logic here
        return null;
    }

    async assignGradesForStudentInCourse(studentId, courseId, body) {
        // write your logic here
        return null;
    }

    async updateGradesForStudentInCourse(param, body) {
        // write your logic here
        return null;
    }

    async getAllCourseAvg(instructorId) {
        // write your logic here
        return null;
    }
}

module.exports = GradeServiceImpl;