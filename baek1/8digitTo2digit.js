function solution(num) {
  let result = [];

  for (let i = 0; i < num.length; i++) {
    let number = Number(num[i])
    let changeTwo = number.toString(2)
    console.log(changeTwo);
    if (i !== 0) {
      if (changeTwo.length < 3) {
        changeTwo = "0".repeat(3 - changeTwo.length) + changeTwo;
        result.push(changeTwo)
      } else {
        result.push(changeTwo)
      }
    }
    else {
      result.push(changeTwo)
    }
  }
  console.log(result.join(''));
}

solution('314')