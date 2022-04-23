function solution(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
    answer++
  }
  console.log(answer)
  return num === 1 ? answer : -1
}

solution(8)

/*
입력된 값이 짝수라면 나누기 2
입력된 값이 홀수라면 곱하기 3 +1
1이 나올때까지 반복

500번 시도해도 1이 안나오면 -1로 반환
*/