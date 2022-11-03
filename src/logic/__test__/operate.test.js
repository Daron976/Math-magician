import operate from '../operate';

describe('operate function', () => {
  const modulosErrMsg = "Can't find modulo as can't divide by 0.";
  const divisionErrMsg = "Can't divide by 0.";

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '+',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe('65');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '-',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe('45');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: 'x',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe('550');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '÷',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe('5.5');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '10',
      operation: '%',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe('5');
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '0',
      operation: '%',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe(modulosErrMsg);
  });

  test('returns a value', () => {
    const obj = {
      total: '55',
      next: '0',
      operation: '÷',
    };

    const execute = operate(obj.total, obj.next, obj.operation);

    expect(execute).toBe(divisionErrMsg);
  });
});
