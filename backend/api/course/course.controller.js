// const logger = require('../../services/logger.service');

const courseService = require('./course.service')

async function getCourses(req, res) {
    try {
        const courses = await courseService.query()
        res.send(courses)
    } catch {
        res.status(500).send({ err: 'Failed to get courses' })
    }
}

async function getCourse(req, res) {
    try {
        const course = await courseService.getById(req.params.courseId)
        res.send(course)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get course' })
    }
}

async function deleteCourse(req, res) {
    try {
        await courseService.remove(req.params.coursetId)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to delete course' })
    }
}

async function saveCourse(req, res) {
    try {
        const course = req.body
        const savedCourse = await courseService.add(course)
        res.send(savedCourse)
    } catch (err) {
        logger.error(`${err}`)
        res.status(500).send({ err: 'Failed to save course' })
    }
}


module.exports = {
    getCourses,
    getCourse,
    deleteCourse,
    saveCourse
}