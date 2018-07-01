import React, { Component } from 'react';
import './TaskInput.css';
import { connect } from 'react-redux'
import { addTask } from '../actions'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {newTaskText: ""}
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleNewTask(event) {
        if(event.keyCode === 13)
        {
            this.props.addTask({
                id: Math.random().toString(36).substr(2, 9),
                text: event.target.value.trim(),
                targetDate: '',
                priority: 'H'
            })
            this.setState({newTaskText: ''});
        }
    }

    handleChange(event) {
        this.setState({newTaskText: event.target.value});
    }

    render() {
        return (
            <div className="task-input-panel">
                <input type="text" 
                    className="input-task" 
                    value={this.state.newTaskText}
                    onKeyUp={this.handleNewTask}
                    onChange={this.handleChange}
                    placeholder="Add task to inbox by Enter" />
            </div>
        );
    }
}

export default connect(null, {addTask})(TaskInput)