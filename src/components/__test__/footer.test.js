import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../footer';

describe('Footer component', () => {
  test('header renders as exepcted', async () => {
    const snapfooter = renderer.create(<Footer />)
      .toJSON();
    expect(snapfooter).toMatchSnapshot();
  });
  test('Footer is present in the Dom', async () => {
    render(<Footer />);

    const calcComponent = screen.getByTestId('footer');

    expect(calcComponent).toBeInTheDocument; //eslint-disable-line
  });
});
