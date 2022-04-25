function solution(s) {
  var answer = '';
  // 홀수일때
  if (s.length % 2 === 1) {
    answer = s[(s.length - 1) / 2]
  } else {
    answer = s[s.length / 2 - 1] + s[s.length / 2]
  }
  console.log(answer);
  return answer;
}
solution('abcdef')

/*
1. string 길이 홀짝 파악
2. 홀수일땐 string 하나만 출력
3. 짝수일땐 string 두개 출력

=> 배열의 인덱스 넘버로 파악!

*/