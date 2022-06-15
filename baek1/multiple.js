function solution(num1, num2) {
  const oneNum = num2 % 10;
  const tenNum = Math.floor((num2 % 100) / 10);
  const hundredNum = Math.floor(num2 / 100);

  console.log(num1 * oneNum);
  console.log(num1 * tenNum);
  console.log(num1 * hundredNum);
  console.log(num1 * num2);
}
solution(472, 385)


