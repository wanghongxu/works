import React, { Component } from 'react';
import './LeftMenu.css';
import {SHOW_ALL, SHOW_TODAY, SHOW_TOMORROW } from '../constants/TaskFilters'
import FilterLink from '../containers/FilterLink'


class LeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state ={
            views: [
                {id: SHOW_ALL, name: '所有', taskCount: 10},
                {id: SHOW_TODAY, name: '今天', taskCount: 6},
                {id: SHOW_TOMORROW, name: '明天', taskCount: 2}
            ]
        };
    }
    

    render() {

        return (
            <div className='left-panel'>
                <ul>
                    {
                        this.state.views.map( view => 

                            <FilterLink 
                                className="menu-item" 
                                key={view.id}
                                filter={view.id}
                                {...view}
                                >
                            </FilterLink>
                        )           
                    }
                </ul>
            </div>
        );
    }
}

export default LeftMenu;