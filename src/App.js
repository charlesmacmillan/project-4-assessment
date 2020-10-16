import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      current: 0,
      circles: [1, 2, 3, 4]
    }
  }

  updateCurrent = i => {
    this.setState({current: i})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            update={this.updateCurrent}
            current={this.state.current} 
            circles={this.state.circles}
          />
          <Circles 
            current={this.state.current} 
            circles={this.state.circles}
          />
        </main>
      </div>
    );
  }
}

export default App;