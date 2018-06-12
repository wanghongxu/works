import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <div className="list-panel">
                <section>
                    <div className="list-header">
                        <div className="list-title">Inbox</div>
                    </div>
                    <ul>
                        <li className="task-line">
                            <div className="list-item">
                                <span className="task-name" contentEditable="true" >sdasdfasdf</span>
                                <div style={{float:'right', position: 'relative', maxHeight: 36+'px'}}>
                                    <span className="target-date"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>


        );
    }
}

export default TaskList;