import moment from 'moment'
import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    COMPLETE_TASK,
    CLEAR_COMLETED
} from '../constants/ActionTypes'

const initialState = [
    {
        id: 1,
        text: 'Task 1',
        targetDate: moment().format("YYYY-MM-DD"),
        priority: ''
    },
    {
        id: 2,
        text: 'Task 2',
        targetDate: moment().add(1, 'days').format("YYYY-MM-DD"),
        priority: ''
    },
]

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state,
                action.task
            ]
        default:
            return state
    }
}