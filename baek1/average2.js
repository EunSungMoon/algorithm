function solution(arr) {

  let newArray = arr.map(i => (
    i < 40 ? i = 40 : i
  ))
  
  let newAverage = newArray.reduce((acc, cur) => acc + cur, 0)
  let result = newAverage / arr.length;
  console.log(result);
}
solution([10, 65, 100, 30, 95])