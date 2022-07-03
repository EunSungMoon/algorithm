function solution(coordinate) {
  let [x, y, w, h] = coordinate.toString().split(' ').map(Number);

  let arr = [x, w - x, y, h - y]
  let answer = Math.min(...arr)
  console.log(answer);
}
solution(['6 2 10 3'])