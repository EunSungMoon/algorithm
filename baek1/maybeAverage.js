function solution(num, score) {
  let sum = score.reduce((pre, cur) => pre + cur, 0)

  let average = sum / num;
  let count = 0;
  
  score.map(v => {
    v > average ? count++ : null
  })
  let result = count / num * 100
  console.log(result);
}
solution(5, [50, 50, 70, 80, 100])