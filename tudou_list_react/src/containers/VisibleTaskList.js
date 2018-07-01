import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TaskActions from '../actions'
import TaskList from '../components/TaskList'
import { getVisibleTasks } from '../selectors'

const mapStateToProps = state => ({
    taskList: getVisibleTasks(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TaskActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)