import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorDom from './components/calculator';
import Home from './components/home';
import Header from './components/header';
import Quote from './components/quote';
import Footer from './components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalculatorDom />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
