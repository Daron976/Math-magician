import React from 'react';
import CalculatorDom from './components/calculator'; // eslint-disable line

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <CalculatorDom />
      </div>
    );
  }
}

export default App;
