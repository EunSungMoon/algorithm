function solution(degrees) {
  let degree = degrees.toString().split(' ')
  console.log(degree);
  const answer = input => {
    const sum = input.map(Number).reduce((acc, cur) => acc + cur);

    if (sum !== 180) return 'Error';

    const set = new Set(input)

    if (set.size === 1) return 'Equilateral'
    if (set.size === 2) return 'Isosceles'
    if (set.size === 3) return 'Scalene'
  }

  console.log(answer(degree));
}
solution(['60 60 60'])