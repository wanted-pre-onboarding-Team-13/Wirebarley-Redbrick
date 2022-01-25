export const getFloatNumber = (num) => {
  //소수점 둘째자리 까지 구하는 함수
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
};
