export const validInput = (input) => {
  //input 유효성 검사함수
  let onlyNum = /[^0-9]/; //input에 문자가 포함되어 있다면
  if (!onlyNum.test(input) && input.length !== 0) {
    if (input < 0 || input > 10000) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
