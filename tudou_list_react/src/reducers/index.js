import { combileReducers, combineReducers } from 'redux'
import tasks from './tasks'
import activedFilter from './activedFilter'

const rootReducer = combineReducers({
    tasks,
    activedFilter
})

export default rootReducer