// function solution(num) {
//   function factorial(a) {
//     if (a <= 1) {
//       return 1;
//     }
//     return a * factorial(a - 1);
//   }

//   console.log(factorial(num));
// }

function solution(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  console.log(result);
}

solution(5)