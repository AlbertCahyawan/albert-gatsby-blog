const sum = require('../components/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test ', () => {
  const n = true;
  expect(n).toBeTruthy() 
  expect(n).not.toBeFalsy();
});
 