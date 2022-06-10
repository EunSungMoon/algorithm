// function solution(n) {
//   var answer = '';
//   const arr = ['4', '1', '2'];
//   while (n > 0) {
//     answer = arr[n % 3] + answer;
//     n = Math.floor((n - 1) / 3);
//     console.log(answer);
//     console.log(n);
//   }


//   return answer;
// }
solution(4)

function solution(n) {
  let answer = '';
  const numArr = [4, 1, 2];

  while (n) {
    answer = numArr[n % 3] + answer;

    // 0 == false
    // 3진법 공식과 비슷
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}