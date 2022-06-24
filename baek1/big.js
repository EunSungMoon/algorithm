function solution(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    return;
  }
  else if (num1 > num2) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
solution(1, 19)