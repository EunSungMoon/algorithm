function solution(phone_number) {
  var answer = '';
  let hide = '*'.repeat(phone_number.length - 4)
  let number = phone_number.slice(-4)

  answer = hide + number
  console.log(`결과 : ${answer}`)
  return answer;
}

solution('01086043283')

/*
번호의 길이에서 4개를 빼고, 번호의 뒷자리 4개를 slice 로 추출
slice() : arr.slice(start, end): start 인덱스부터 end를 제외한 인덱스까지 요소를 복사해 새로운 배열로 반환
splice() : let arr=[a,b,c,]; arr.splice(1,1) => [a,b] 인덱스 1부터 1개의 요소 삭제

repeat() : 문자열을 주어진 횟수만큼 반복해 붙힌 새로운 문자열을 반환
*/

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
console.log("결과 : " + hide_numbers('01033334444'));

/*
정규표현식
\d{4}: 4번 반복되는 문자열 의미
\d(?=\d{4}) : 숫자 4개가 뒤따라오는 숫자 문자를 구한다.

replace() : 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
*/