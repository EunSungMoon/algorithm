function solution(a, b) {
  var answer = 0;
  answer = (a + b) * (Math.abs(b - a) + 1) / 2
  return answer;
}

/*
가우스 공식 등차수열 => n*(n+1)/2
*/