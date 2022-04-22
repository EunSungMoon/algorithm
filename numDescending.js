function solution(n) {
  var answer = 0;
  let result = (n + "").split('').sort().reverse().join('')
  answer = parseInt(result)
  return answer;
}

solution(118372)

/*
1. 숫자 분리
2. 순서대로 sorting하고
3. 순서를 바꿔주고
4. 다시 합쳐줌
*/