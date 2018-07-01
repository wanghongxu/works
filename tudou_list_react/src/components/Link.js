import React, { Component } from 'react';

class Link extends Component {

    render() {
        let itemClass = {
            "menu-item": true,
            "selected": this.props.active
        }
        return (
            <li className={itemClass} onClick={() => this.props.setFilter()}>
                <span className="menu-label">{this.props.name}</span>
                <span className="task-count">{this.props.taskCount}</span>
            </li>
        );
    }
}

export default Link;