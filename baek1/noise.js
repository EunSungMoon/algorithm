function solution(num) {
  let [num1, op, num2] = num.toString().split(',')
  let a = num1.length - 1
  let b = num2.length - 1
  let bigger = Math.max(a, b)
  let smaller = Math.min(a, b)

  let result =
    op == '*' ?
      ('1' + '0'.repeat(a + b))
      : a == b ? ('2' + '0'.repeat(a))
        : ('1' + '0'.repeat(bigger - smaller - 1) + '1' + '0'.repeat(smaller));
  console.log(result);
  console.log('1' + '0'.repeat(a + b));
}
solution([1000, '+', 100])