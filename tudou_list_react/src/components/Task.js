import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    render() {
        return (
            <li className="task-line">
                <div className="list-item">
                    <span className="task-name">{this.props.text}</span>
                </div>
            </li>
        );
    }
}

Task.propTypes = {
    text: PropTypes.string
}

export default Task;