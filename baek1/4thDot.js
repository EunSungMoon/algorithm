function solution(dot) {
  let input = dot.toString().trim().split(',').map(v => v.split(' '))
  let x = input.map(i => i[0]).sort((a, b) => a - b)
  let y = input.map(i => i[1]).sort((a, b) => a - b)

  x = x[0] === x[1] ? x[2] : x[0]
  y = y[0] === y[1] ? y[2] : y[0]
  console.log(x, y);
}

solution(['5 5', '5 7', '7 5'])