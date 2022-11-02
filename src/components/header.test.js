import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';
import Header from '../header';
import Home from '../home';
import Quote from '../quote';

describe('Header component', () => {


  const Route = () => {
    <BrowserRouter>
      <Header />
    </BrowserRouter>
      
  }
  
  test('header renders as exepcted', async () => {
    
    const snapHeader = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>)
      .toJSON();

    expect(snapHeader).toMatchSnapshot();
  })

  test('Header is present in the Dom', async () => {
    render(<Route />);

    const headerComponent = screen.findAllByRole('heading');

    expect(headerComponent).toBeInTheDocument;
  })

  test('Header is visible', async () => {
    render(<Route />);

    const headerComponent = screen.findByRole('heading');

    expect(headerComponent).toBeVisible;
  })

  describe('navigation', () => {
    test('links should be present', async () => {
      render(<Route />);

      const homeLink = screen.findByRole('link', {name: Home})
      const calculatorLink = screen.findByRole('link', {name: Calculator})
      const quoteLink = screen.findByRole('link', {name: Quote})
  
      expect(homeLink).toBeInTheDocument;
      expect(calculatorLink).toBeInTheDocument;
      expect(quoteLink).toBeInTheDocument;
    })

    test('links should be visible', async () => {
      render(<Route />);

      const homeLink = screen.findByRole('link', {name: Home})
      const calculatorLink = screen.findByRole('link', {name: Calculator})
      const quoteLink = screen.findByRole('link', {name: Quote})
  
      expect(homeLink).toBeVisible;
      expect(calculatorLink).toBeVisible;
      expect(quoteLink).toBeVisible;
    })
  })
})
