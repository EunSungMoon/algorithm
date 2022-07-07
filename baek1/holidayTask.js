function solution(input) {
  let [L, A, B, C, D] = input.toString().trim().split(' ');
  let aDay = Math.ceil(A / C)
  let bDay = Math.ceil(B / D)
  aDay >= bDay ? console.log(L - aDay) : console.log(L - bDay)
}
solution(['20 25 30 6 8'])