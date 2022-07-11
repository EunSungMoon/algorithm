function solution(length) {
  let input = length.toString().trim().split(',')
  let [...nums] = input.map(v => v.split(' ').map(Number))

  nums.map(v => {
    if (v === '0 0 0') return true;
    
    if (v[0] ** 2 + v[1] ** 2 === v[2] ** 2) {
      console.log('right');
    } else {
      console.log('wrong');
    }
  })
}
solution(['6 8 10', '25 52 60', '5 12 13'])
// solution('0 0 0')