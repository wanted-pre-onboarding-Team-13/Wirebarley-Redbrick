import { numberWithoutCommas } from './numberWithoutCommas';

test('return number with commas', () => {
  expect(numberWithoutCommas(1000)).toEqual('1,000');
  expect(numberWithoutCommas(999)).toEqual('999');
  expect(numberWithoutCommas(999999)).toEqual('999,999');
});