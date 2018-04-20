const test = require('ava');

const isBalanced = require('./is-balanced');

test('An empty string is balanced', (t) => {
  const stringToTest = '';

  const result = isBalanced(stringToTest);

  t.true(result);
});

test('false if just one bracket', (t) => {
  const stringToTest = '[';

  const result = isBalanced(stringToTest);

  t.false(result);
});

test('false if two open brackets', (t) => {
  const stringToTest = '[{';
  const result = isBalanced(stringToTest);

  t.false(result);
});

test('true if open close brackets', (t) => {
  const stringToTest = '[{}]';
  const result = isBalanced(stringToTest);
  t.true(result);
});
