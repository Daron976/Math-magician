/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import calculate from '../logic/calculate';
import Display from './display';

class CalculatorDom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  buttonClick(e) {
    const calc = calculate(this.state, e.target.textContent);
    this.setState(calc);
  }

  render() {
    return (
      <section id="calculator" data-testid="calculator" className="flex">
        <div className="calculatorWrapper flex">
          <Display {...this.state} />
          <div className="btns flex">
            <div className="numbers">
              <div className="specialCharacters">
                <button onClick={this.buttonClick} type="button" className="symbol">AC</button>
                <button onClick={this.buttonClick} type="button" className="symbol">+/-</button>
                <button onClick={this.buttonClick} type="button" className="symbol">%</button>
              </div>
              <div className="firstRow">
                <button onClick={this.buttonClick} type="button" className="number" value="7">7</button>
                <button onClick={this.buttonClick} type="button" className="number" value="8">8</button>
                <button onClick={this.buttonClick} type="button" className="number" value="9">9</button>
              </div>
              <div className="secondRow">
                <button onClick={this.buttonClick} type="button" className="number" value="4">4</button>
                <button onClick={this.buttonClick} type="button" className="number" value="5">5</button>
                <button onClick={this.buttonClick} type="button" className="number" value="6">6</button>
              </div>
              <div className="thirdRow">
                <button onClick={this.buttonClick} type="button" className="number" value="1">1</button>
                <button onClick={this.buttonClick} type="button" className="number" value="2">2</button>
                <button onClick={this.buttonClick} type="button" className="number" value="3">3</button>
              </div>
              <div className="fourthRow">
                <button onClick={this.buttonClick} type="button" className="number" value="0">0</button>
                <button onClick={this.buttonClick} type="button" className="symbol">.</button>
              </div>
            </div>
            <div className="operators flex">
              <button onClick={this.buttonClick} type="button" className="symbol">÷</button>
              <button onClick={this.buttonClick} type="button" className="symbol">x</button>
              <button onClick={this.buttonClick} type="button" className="symbol">-</button>
              <button onClick={this.buttonClick} type="button" className="symbol">+</button>
              <button onClick={this.buttonClick} type="button" className="symbol">=</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CalculatorDom;
