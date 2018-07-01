import React, { Component } from 'react';
import Task from './Task'

class TaskList extends Component {

    render() {
        return (
            <div className="list-panel">
                <section>
                    <div className="list-header">
                        <div className="list-title">Inbox</div>
                    </div>
                    <ul>
                        {
                            this.props.taskList.map(task => 
                                <Task key={task.id}
                                {...task}
                                onDelete={() => this.props.deleteTask(task.id)}
                                />
                            )
                        }
                    </ul>
                </section>
            </div>


        );
    }
}

export default TaskList;