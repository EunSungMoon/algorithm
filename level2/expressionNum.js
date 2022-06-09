function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    console.log(i,i%2===1);
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}

solution(15)