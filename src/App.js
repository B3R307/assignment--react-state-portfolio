import React, { Component } from 'react';
import FilterProjects from './components/FilterProjects.js'
import ShowHideTech from './components/ShowHideTech.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        // / Add Components Here in App - component  /
        <span className={this.props.techComponents}> </span>
        <ShowHideTech/>
        <span className="{techlist}"/>

      </div>
    );
  }
}

export default App;
