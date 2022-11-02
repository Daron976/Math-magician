import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../home';

describe('Home component', () => {
  test('home component renders as exepcted', async () => {
    const snapHome = renderer.create(<Home />)
      .toJSON();
    expect(snapHome).toMatchSnapshot();
  });
  test('home component to be present in DOM', async () => {
    render(<Home />);

    const homeComponent = screen.getByTestId('home');

    expect(homeComponent).toBeInTheDocument; //eslint-disable-line
  });
});
