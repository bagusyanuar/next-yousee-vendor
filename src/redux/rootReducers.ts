import { combineReducers } from 'redux'
import login from './login/slice'

const rootReducer = combineReducers({
    login: login
})

export default rootReducer