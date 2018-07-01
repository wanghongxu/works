import * as types from '../constants/ActionTypes'

export const addTask = task => ({ type: types.ADD_TASK, task})
export const deleteTask = id => ({ type: types.DELETE_TASK, id})
export const editTask = task => ({ type: types.EDIT_TASK, task})
export const completeTask = id => ({ type: types.COMPLETE_TASK, id})
export const clearComplete = id => ({ type: types.CLEAR_COMPLETE, id})

export const setFixedFilter = filter => ({ type: types.SET_FIXED_FILTER, filter})