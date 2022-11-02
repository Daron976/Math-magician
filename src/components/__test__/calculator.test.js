import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

describe('Calculator component', () => {
  test('header renders as exepcted', async () => {
    const snapCalculator = renderer.create(<Calculator />)
      .toJSON();
    expect(snapCalculator).toMatchSnapshot();
  });

  test('Calculator is present in the Dom', async () => {
    render(<Calculator />);

    const calcComponent = screen.getByTestId(/calculator/i);

    expect(calcComponent).toBeInTheDocument; //eslint-disable-line
  });

  describe('calculator UI', () => {
    test('clicked button is displayed', async () => {
      render(<Calculator />);

      const display = screen.getByTestId('display');
      const button9 = screen.getByText('9');
      fireEvent.click(button9);

      expect(display.innerHTML.trim()).toBe('9');
    });
    test('clicked button is displayed', async () => {
      render(<Calculator />);

      const display = screen.getByTestId('display');
      const button5 = screen.getByText('5');
      const button2 = screen.getByText('2');
      const button6 = screen.getByText('6');
      const button8 = screen.getByText('8');
      fireEvent.click(button5);
      fireEvent.click(button2);
      fireEvent.click(button6);
      fireEvent.click(button8);
      fireEvent.click(button2);

      expect(display.innerHTML.trim()).toBe('52682');
    });
    test('clicked button is displayed', async () => {
      render(<Calculator />);

      const display = screen.getByTestId('display');
      const button5 = screen.getByText('5');
      const button2 = screen.getByText('2');
      const addition = screen.getByText('+');
      const evaluation = screen.getByText('=');

      fireEvent.click(button5);
      fireEvent.click(addition);
      fireEvent.click(button2);
      fireEvent.click(evaluation);

      expect(display.innerHTML.trim()).toBe('7');
    });
  });
});
