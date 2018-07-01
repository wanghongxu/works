import { createSelector } from 'reselect'
import {SHOW_ALL, SHOW_TODAY, SHOW_TOMORROW } from '../constants/TaskFilters'
import moment from 'moment'

const getActivedFilter = state => state.activedFilter
const getTasks = state => state.tasks

export const getVisibleTasks = createSelector(
  [getActivedFilter, getTasks],
  (activedFilter, tasks) => {
    switch (activedFilter) {
      case SHOW_ALL:
        return tasks
      case SHOW_TODAY:
        return tasks.filter(t => t.targetDate === moment().format("YYYY-MM-DD"))
      case SHOW_TOMORROW:
        return tasks.filter(t => t.targetDate === moment().add(1, 'days').format("YYYY-MM-DD"))
      default:
        throw new Error('Unknown filter: ' + activedFilter)
    }
  }
)