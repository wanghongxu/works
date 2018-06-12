import React, { Component } from 'react';
import './Main.css';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className="top-title">
                    XXXXXXXX
                </div>
                <TaskInput />
                <TaskList />
            </div>
        );
    }
}

export default Main;