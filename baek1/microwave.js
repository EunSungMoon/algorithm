function solution(num) {
  const A = 300;
  const B = 60;
  const C = 10;

  let answer = '';
  let temp = num;
  answer += parseInt(temp / A);
  temp = temp % A;

  answer += parseInt(temp / B);
  temp = temp % B;

  answer += parseInt(temp / C);
  temp = temp % C;

  answer = temp !== 0 ? -1 : answer
  console.log(answer)
}
solution(100)