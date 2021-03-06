import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer.js'
import { uiReducer } from './reducers/uiReducer.js'
import { courseReducer } from './reducers/courseReducer.js'
import { PurchaseReducer } from './reducers/PurchaseReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    userModule: userReducer,
    uiModule: uiReducer,
    courseModule: courseReducer,
    PurchaseModule: PurchaseReducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)