import calculate from '../calculate';

describe('calculate function', () => {
  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '+',
    };

    const execute = calculate(obj, '=');

    expect(execute.total).toBe('65');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '-',
    };

    const execute = calculate(obj, '=');

    expect(execute.total).toBe('45');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '+',
    };

    const execute = calculate(obj, 'AC');

    expect(execute.total).toBe(null);
  });
});
