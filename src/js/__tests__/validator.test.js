import Validator from '../validator';

test('error 1 - uncorrect symbols', () => {

  expect(Validator.validateUserName('aaa@bbb')).toBe('error 1');
  expect(Validator.validateUserName('aaa.ru')).toBe('error 1');
  expect(Validator.validateUserName('Николай')).toBe('error 1');
  expect(Validator.validateUserName('Николай, да')).toBe('error 1');
  expect(Validator.validateUserName('Николай?')).toBe('error 1');

});

test('error 2 - start symbols', () => {

  expect(Validator.validateUserName('0aaa')).toBe('error 2');
  expect(Validator.validateUserName('-aaa')).toBe('error 2');
  expect(Validator.validateUserName('_aaa')).toBe('error 2');
});

test('error 3 - ending symbols', () => {

  expect(Validator.validateUserName('aaa0')).toBe('error 3');
  expect(Validator.validateUserName('aaa-')).toBe('error 3');
  expect(Validator.validateUserName('aaa_')).toBe('error 3');
});

test('error 4 - 3 in a row', () => {

  expect(Validator.validateUserName('aaa000bbb')).toBe('error 4');
  expect(Validator.validateUserName('aaa___bbb')).toBe('error 4');
  expect(Validator.validateUserName('aaa---bbb')).toBe('error 4');
});

test('correct', () => {

  expect(Validator.validateUserName('nick2bloody')).toBe('correct');
  expect(Validator.validateUserName('aaa')).toBe('correct');
  expect(Validator.validateUserName('a-b')).toBe('correct');
});