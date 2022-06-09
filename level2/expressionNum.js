function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  console.log(answer);
  return answer;
}

function solution(n) {
  let answer = 0;
  let start = 1;

  while (start <= n) {
    let tmp = 0;

    for (let i = start; tmp <= n; i++) {
      tmp += i;

      if (tmp === n) {
        answer++;
      }
    }

    start++;
  }

  return answer;
}

/*
주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수와 같다
는 공식을 활용한 풀이
*/
