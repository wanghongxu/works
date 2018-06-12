import React, { Component } from 'react';
import './App.css';
import LeftMenu from "./containers/LeftMenu";
import Main from "./containers/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftMenu />
        <Main />
      </div>
    );
  }
}

export default App;
