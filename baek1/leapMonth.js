function solution(a) {
  (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0 ? console.log(1) : console.log(0)
}