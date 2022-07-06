function solution(num) {
  let input1 = num.slice(1, 2).toString().split(' ').map(Number)
  let input2 = num.slice(2, 3).toString().split(' ').map(Number)
  let test = (input) => {
    let even = input.filter(item => item % 2 === 0)
    let result = even.reduce((acc, cur) => acc + cur, 0)

    console.log(result, Math.min(...even));
  }
  test(input1)
  test(input2)
}
solution(['2', '1 2 3 4 5 6 7', '13 78 39 42 54 93 86'])