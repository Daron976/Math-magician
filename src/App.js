/*eslint-disable*/ 
import React from 'react';
import CalculatorDom from './components/calculator';
import Home from './components/home';
import Header from './components/header';
import Quote from './components/quote';
import Footer from './components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Header />
        {/* <Home /> */}
        <CalculatorDom />
        {/* <Quote /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
