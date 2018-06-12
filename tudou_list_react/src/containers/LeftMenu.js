import React, { Component } from 'react';
import './LeftMenu.css';

class LeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state ={
            views: [
                {name: 'HKT', taskCount: 10},
                {name: 'HKT2222222', taskCount: 2}
            ]
        };
    }
    

    render() {

        const listItems = this.state.views.map((view) => 
            <li className="menu-item" key={view.name}>
                <span className="menu-label">{view.name}</span>
                <span className="task-count">{view.taskCount}</span>
            </li>
        );


        return (
            <div className='left-panel'>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;