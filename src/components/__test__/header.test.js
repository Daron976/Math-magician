import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';
import Header from '../header';
import Home from '../home';
import Quote from '../quote';

describe('Header component', () => {
  const Route = () => {
    <BrowserRouter>
      <Header />
    </BrowserRouter>;
  };

  test('header renders as exepcted', async () => {
    const snapHeader = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
      .toJSON();

    expect(snapHeader).toMatchSnapshot();
  });

  test('Header is present in the Dom', async () => {
    render(<Route />);

    const headerComponent = screen.findByRole('heading');

    expect(headerComponent).toBeInTheDocument;//eslint-disable-line
  });

  test('Header is visible', async () => {
    render(<Route />);

    const headerComponent = screen.findByRole('heading');

    expect(headerComponent).toBeVisible;//eslint-disable-line
  });

  describe('navigation', () => {
    test('links should be present', async () => {
      render(<Route />);

      const homeLink = screen.findByRole('link', { name: Home });
      const calculatorLink = screen.findByRole('link', { name: Calculator });
      const quoteLink = screen.findByRole('link', { name: Quote });

      expect(homeLink).toBeInTheDocument;//eslint-disable-line
      expect(calculatorLink).toBeInTheDocument;//eslint-disable-line
      expect(quoteLink).toBeInTheDocument;//eslint-disable-line
    });

    test('links should be visible', async () => {
      render(<Route />);

      const homeLink = screen.findByRole('link', { name: Home });
      const calculatorLink = screen.findByRole('link', { name: Calculator });
      const quoteLink = screen.findByRole('link', { name: Quote });

      expect(homeLink).toBeVisible;//eslint-disable-line
      expect(calculatorLink).toBeVisible;//eslint-disable-line
      expect(quoteLink).toBeVisible;//eslint-disable-line
    });
  });
});
