const initialState = {
    courses: null,
    filterCourses: ""
}

export function courseReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_COURSES':
            return {
                ...state,
                courses: action.courses
            }
        case 'ADD_COURSE':
            return {
                ...state,
                courses: [...state.courses, action.course]
            }
        case 'UPDATE_COURSE':
            return {
                ...state,
                courses: state.courses.map(course => {
                    if (course._id === action.course._id) return action.course;
                    return course;
                })
            }
        case 'FILTER_COURSE':
            return {
                ...state,
                filterCourses: action.filter
            }
        default:
            return state
    }
}