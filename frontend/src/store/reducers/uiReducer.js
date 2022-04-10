const initialState = {
    toggleLogin: true,
    toggleAddCourse: false
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_LOGIN':
            const toggleLogin = !state.toggleLogin;
            return { ...state, toggleLogin: toggleLogin }
        case 'TOGGLE_ADD_COURSE':
            const toggleCourse = !state.toggleAddCourse;
            return { ...state, toggleAddCourse: toggleCourse }
        default:
            return state
    }
}