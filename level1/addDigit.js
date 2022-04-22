// function solution(n) {
//   var answer = 0;
//   answer = (n + '').split('').reduce((pre, cur) => pre + parseInt(cur),0)
//   console.log(answer)
//   return answer;
// }

//간단한 방법
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

solution(123)

/*
  아이디어 : 숫자를 짤라서 더하기?
  parseInt() : 문자열 인자를 파싱해서 특정 진수의 정수를 반환
  reduce((pre, cur) => pre + parseInt(cur),0) => 0으로 초기값 설정

(n+'')로 숫자를 문자열로 바꾼후 split 하고 초기값을 숫자 0으로 설정 후 더해야 하는 자리수 문자열을 숫자로 파싱!!
다시 더해줌!!

*/