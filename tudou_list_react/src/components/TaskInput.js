import React, { Component } from 'react';
import './TaskInput.css';

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
            console.log(this.state.newTaskText);
            
        }
    }

    handleChange(event) {
        this.setState({newTaskText: event.target.value});
    }

    render() {
        return (
            <div className="task-input-panel">
                <input type="text" className="input-task" value={this.state.newTaskText}
                    onKeyUp={this.handleNewTask}
                    onChange={this.handleChange}
                    placeholder="Add task to inbox by Enter" />
            </div>
        );
    }
}

export default TaskInput;