function solution(num, score) {
  const max = Math.max(...score);
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += score[i] / max * 100;

  }
  console.log(sum / num)
}

solution(3, [40, 80, 60])