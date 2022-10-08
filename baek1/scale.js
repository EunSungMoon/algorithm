function solution(scale) {
  let input = scale.toString().trim().split(' ').map(i => Number(i))
  let compareArr = input.slice()

  if (compareArr.sort((a, b) => a - b).join(' ') === input.join(' ')) {
    console.log('ascending')
  } else if (compareArr.sort((a, b) => b - a).join(' ') === input.join(' ')) {
    console.log('descending');
  } else {
    console.log('mixed')
  }

}
solution(['8 7 6 5 4 3 2 1'])
