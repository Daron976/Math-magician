import renderer from 'react-test-renderer';
import Quote from '../quote';

describe('Quote component', () => {
  test('header renders as exepcted', async () => {
    const snapQuote = renderer.create(<Quote />)
      .toJSON();
    expect(snapQuote).toMatchSnapshot();
  });
});
