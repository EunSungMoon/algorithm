function solution(phone_number) {
  var answer = '';
  answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  console.log("결과 :" + answer)
  return answer;

}

solution('01086043283')

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
console.log("결과 : " + hide_numbers('01033334444'));