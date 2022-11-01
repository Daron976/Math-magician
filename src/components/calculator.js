/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './display';

const CalculatorDom = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonClick = (e) => {
    const calc = calculate(state, e.target.textContent);
    setState(calc);
  };

  return (
    <section id="calculator" data-testid="calculator" className="flex">
      <h1>Let&#39;s make some calculations</h1>
      <div className="calculatorWrapper flex">
        <Display {...state} />
        <div className="btns flex">
          <div className="numbers">
            <div className="specialCharacters">
              <button onClick={buttonClick} type="button" className="symbol">AC</button>
              <button onClick={buttonClick} type="button" className="symbol">+/-</button>
              <button onClick={buttonClick} type="button" className="symbol">%</button>
            </div>
            <div className="firstRow">
              <button onClick={buttonClick} type="button" className="number" value="7">7</button>
              <button onClick={buttonClick} type="button" className="number" value="8">8</button>
              <button onClick={buttonClick} type="button" className="number" value="9">9</button>
            </div>
            <div className="secondRow">
              <button onClick={buttonClick} type="button" className="number" value="4">4</button>
              <button onClick={buttonClick} type="button" className="number" value="5">5</button>
              <button onClick={buttonClick} type="button" className="number" value="6">6</button>
            </div>
            <div className="thirdRow">
              <button onClick={buttonClick} type="button" className="number" value="1">1</button>
              <button onClick={buttonClick} type="button" className="number" value="2">2</button>
              <button onClick={buttonClick} type="button" className="number" value="3">3</button>
            </div>
            <div className="fourthRow">
              <button onClick={buttonClick} type="button" className="number" value="0">0</button>
              <button onClick={buttonClick} type="button" className="symbol">.</button>
            </div>
          </div>
          <div className="operators flex">
            <button onClick={buttonClick} type="button" className="symbol">÷</button>
            <button onClick={buttonClick} type="button" className="symbol">x</button>
            <button onClick={buttonClick} type="button" className="symbol">-</button>
            <button onClick={buttonClick} type="button" className="symbol">+</button>
            <button onClick={buttonClick} type="button" className="symbol">=</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorDom;
