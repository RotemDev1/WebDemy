const express = require('express')
const router = express.Router()
const { getCourses, getCourse, deleteCourse, saveCourse } = require('./course.controller')

router.get('/', getCourses)
router.get('/:courseId', getCourse)
router.delete('/:courseId', deleteCourse)
router.post('/', saveCourse)
router.put('/:courseId', saveCourse)


module.exports = router;