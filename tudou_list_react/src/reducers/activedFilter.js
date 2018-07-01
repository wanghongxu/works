import { SET_FIXED_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TaskFilters'

const activedFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FIXED_FILTER:
      return action.filter
    default:
      return state
  }
}

export default activedFilter