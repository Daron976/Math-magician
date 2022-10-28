import React from 'react';
import CalculatorDom from './components/calculator';

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
