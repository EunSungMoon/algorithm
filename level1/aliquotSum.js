function solution(n) {
  var answer = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i
    }
  }
  console.log(answer);
  return answer;
}
solution(12)

/*
for문을 돌려서 입력값과 나눴을때 나머지가 0인 값들을 더한다.
더 좋은 방법이 없을까
*/