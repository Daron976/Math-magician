import renderer from 'react-test-renderer';
import Display from '../display';

describe('Display component', () => {
  test('display component renders as exepcted', async () => {
    const snapHome = renderer.create(<Display total="23" next="34" operation="+" />)
      .toJSON();
    expect(snapHome).toMatchSnapshot();
  });
});
