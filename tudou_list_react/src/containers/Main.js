import React, { Component } from 'react';
import './Main.css';
import TaskInput from '../components/TaskInput';
import VisibleTaskList from './VisibleTaskList';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className="top-title">
                    XXXXXXXX
                </div>
                <TaskInput />
                <VisibleTaskList />
            </div>
        );
    }
}

export default Main;