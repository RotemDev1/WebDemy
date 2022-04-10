import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
// import { courseReducer } from './courseReducer'

export const rootReducer = combineReducers({

    userModule: userReducer,
})