function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j <=Math.sqrt(n); j++) { //소수가 아닌 정수만 다루고 싶어서?
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

solution(10)

/*
에라토스테네스 체
1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열
2. 2는 소수
3. 2를 제외한 2의 배수 모두 지운다
4. 남아있는 수 가운데 3은 소수 
5. 3을 제외한 3의 배수 지우기
6. 5,7 반복
7. 위의 과정을 반복하면 구하고자 하는 구간의 모든 소수가 남는다
*/