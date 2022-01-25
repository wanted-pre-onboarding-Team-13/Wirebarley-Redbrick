import { numberWithCommas } from './numberWithCommas';

it('return number with commas and 2 decimal points', () => {
  expect(numberWithCommas(1241422)).toEqual('1,241,422.00');
  expect(numberWithCommas(124444435)).toEqual('124,444,435.00');
  expect(numberWithCommas(12453)).toEqual('12,453.00');
  expect(numberWithCommas(12424.0214)).toEqual('12,424.02');
});

it('second return number with commas and 2 decimal points', () => {
  expect(numberWithCommas(111.321)).toEqual('111.32');
});
