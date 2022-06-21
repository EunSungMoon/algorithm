function solution(key) {
  let value = 1;

  while (true) {
    console.log(`value ${value}`);
    key -= value;
    console.log(`key ${key}`);

    if (key <= 0) {
      key += value;
      break;
    }
    value++;
  }


  console.log(`value ${value}`);
  console.log(key);

  if (value % 2 === 1) {
    console.log(`${value - (key - 1)}/${key}`);
  } else {
    console.log(`${key}/${value - (key - 1)}`);
  }

}
solution(4)

/*
while 문 순서

1. value=1, key=4 => key=3;
2. value=2, key=3 => key=1;
3. value=3, key=1 => key=-2;
4. if (key <= 0) {
    key += value;
    break;
    }
    => key=1 & break;

while 은 탈출하고 if문으로 넘어감
value=3, key=1
*/