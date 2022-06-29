function solution(time) {
  let timeArray = time.toString().split(' ').map(Number)
  let totalTime = timeArray.reduce((acc, cur) => acc + cur, 0)
  let minute = parseInt(totalTime / 60)
  let second = parseInt(totalTime % 60)
  console.log(`${minute} ${second}`);
}
solution(['31 34 7 151'])