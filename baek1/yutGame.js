function solution(num) {
  let input1 = num.slice(0, 1).toString().split(' ').map(Number)
  let input2 = num.slice(1, 2).toString().split(' ').map(Number)
  let input3 = num.slice(2, 3).toString().split(' ').map(Number)
  let newArr = [input1, input2, input3]
  let numOfZero = 0
  for (let i in newArr) {
    if (newArr[i] !== '') {
      newArr[i].forEach(j => {
        if (j === 0) {
          numOfZero++;
        }
      });
      switch (true) {
        case numOfZero === 0:
          console.log('E');
          break;
        case numOfZero === 1:
          console.log('A');
          break;
        case numOfZero === 2:
          console.log('B');
          break;
        case numOfZero === 3:
          console.log('C');
          break;
        default:
          console.log('D');
          break;
      }
      numOfZero = 0;
    }
  }
}
solution(['0 1 0 1', '1 1 1 0', '0 0 1 1'])