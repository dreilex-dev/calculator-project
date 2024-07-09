const calculator = require('./index');

describe('add', () => {
  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});

describe('divide', ()=> {
    test('divide two numbers', () =>{
        expect(calculator.divide(4, 2)).toBe(2);
    });
});