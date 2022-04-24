function solution(n) {
  let answer = 1;
  while (n % answer != 1) answer++
  console.log(answer);
  return answer
}

solution(10)