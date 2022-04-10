export function toggleAddCourse(value) {

    return async dispatch => {
        try {
            dispatch({ type: 'TOGGLE_ADD_COURSE', value })
        } catch (err) {
            console.log("UIActions: err in toggle ");
        }
    }
}