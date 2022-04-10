import { courseService } from '../../service/courseService'

// THUNK action creators
// Work asynchronously with the service and dispatch actions to the reducers 

export function getCourses(filter) {
    return async dispatch => {
        try {
            const courses = await courseService.query(filter);
            dispatch({ type: 'SET_COURSES', courses })
        } catch (err) {
            console.log('CourseActions: err in loadCourses', err)
        }
    }
}

//CHECK
export function addCourse(course) {
    return async dispatch => {
        try {
            const type = course._id ? 'UPDATE_COURSE' : 'ADD_COURSE';
            const addCourse = await courseService.add(course)
            dispatch({ type, course: addCourse })
        } catch (err) {
            console.log('Course Actions: err in add course', err)
        }
    }
}

export function updateCourse(course) {
    return async dispatch => {
        try {
            const updatecourse = await courseService.add(course)
            dispatch({ type: 'UPDATE_COURSE', course: updatecourse })

        } catch (err) {
            console.log('Course Actions: err in update course', err)
        }
    }
}