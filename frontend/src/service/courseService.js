// import { Courses } from "../data/dummyCourses"
// import { storageService } from "./generalService/asyncStorageService";

import { httpService } from "./generalService/httpService";

export const courseService = {
    query,
    add,
    // remove,
    // update,
    getById
}

async function query(filter) {
    const courses = await httpService.get('course');
    return courses;
}

async function add(course) {
    if (course._id) {
        const res = await httpService.put(`course/${course._id}`, course)
        return res
    } else {
        const res = await httpService.post(`course`, course)
        return res
    }
}

function getById(courseId) {
    return httpService.get(`course/${courseId}`)
}

// function update() {

// }

// const gCourses = Courses;


// function query(filter = "") {
//     // return Courses;
//     const courses = storageService.getEntity('courses');
//     const filterCourses = _filterQuery(courses, filter)
//     return filterCourses;
// }

// function _filterQuery(courses, filter, mentor) {
//     let filterCourses = [];
//     const filterString = filter.toUpperCase();
//     courses.forEach(course => {
//         if (
//             course.language.toUpperCase().includes(filterString) ||
//             course.mentor.toUpperCase().includes(filterString)
//         )
//             filterCourses.push(course);
//     })
//     filterCourses.sort((function (a, b) {
//         return b.view - a.view;
//     }));
//     return filterCourses;
// }

// async function add(course) {
//     const addedCourse = await storageService.post('courses', course);
// }

// function remove(id) {
//     const updateCourse = gCourses.filter(course => course._id !== id)

// }
// function getPostByUser(userId) {
//     return storageService.query('posts').then(posts =>
//         posts.filter(post => post.userId === userId))
// }
// function getById(_id) {
//     return Courses.find(course => course._id === _id)
// }