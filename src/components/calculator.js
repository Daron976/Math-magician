import React from 'react';

class CalculatorDom extends React.PureComponent {
  render() {
    return (
      <section id="calculator" data-testid="calculator" className="flex">
        <div className="calculatorWrapper flex">
          <p className="screen flex">0</p>
          <div className="btns flex">
            <div className="numbers">
              <div className="specialCharacters">
                <button type="button" className="symbol">AC</button>
                <button type="button" className="symbol">+/-</button>
                <button type="button" className="symbol">%</button>
              </div>
              <div className="firstRow">
                <button type="button" className="number" value="7">7</button>
                <button type="button" className="number" value="8">8</button>
                <button type="button" className="number" value="9">9</button>
              </div>
              <div className="secondRow">
                <button type="button" className="number" value="4">4</button>
                <button type="button" className="number" value="5">5</button>
                <button type="button" className="number" value="6">6</button>
              </div>
              <div className="thirdRow">
                <button type="button" className="number" value="1">1</button>
                <button type="button" className="number" value="2">2</button>
                <button type="button" className="number" value="3">3</button>
              </div>
              <div className="fourthRow">
                <button type="button" className="number" value="0">0</button>
                <button type="button" className="symbol">.</button>
              </div>
            </div>
            <div className="operators flex">
              <button type="button" className="symbol">÷</button>
              <button type="button" className="symbol">x</button>
              <button type="button" className="symbol">-</button>
              <button type="button" className="symbol">+</button>
              <button type="button" className="symbol">=</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CalculatorDom;
