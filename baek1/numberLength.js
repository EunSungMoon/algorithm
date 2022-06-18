function solution(a, b, c) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const num = [a * b * c].toString().split('')
  console.log(num);

  for (const item of arr) {
    let count = 0;

    num.map(v => {
      if (Number(num[v]) === item) {
        count++
      }
    })
      console.log(count)
  }
}

solution(150, 266, 427)