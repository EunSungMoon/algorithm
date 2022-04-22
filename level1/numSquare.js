function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 === 0) {
    answer = Math.pow(sqrt + 1, 2)
  } else {
    answer = -1
  }
  console.log(answer)
  return answer;
}

solution(16)

/*
Math.sqrt(num) : 주어진 값에 루트씌움
1. 입력된 값을 sqrt()라는 메소드로 루트를 씌움
2. 루트 씌운 값이 정수인지 소수인지 판별 1로 나눴을때 나머지가 있을 경우 소수=>-1 반환
3. 0일 경우 루트 씌운 값에 +1을 한 후 제곱 후 return
*/