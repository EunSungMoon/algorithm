function solution(array, commands) {
  return commands.map(
    ([from, to, k]) =>
      array.slice(from - 1, to).sort((a, b) => a - b)[k - 1]
  )
}

function solution(array, commands) {
  return commands.map(
    ([from, to, k]) =>
      array.slice(from - 1, to).sort((a, b) => a - b)[k - 1],
  );
}

// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

/*
-slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]


from-1을 해주는 이유는 slice(from)을 하면 from 수까지 짤리기때문에
from 수부터 시작해야하는데 말이지!
to는 to까지 포함되서 끊어지니까 -1할 필요가 없다


k-1을 해주는 이유는 배열은 0부터 시작 k번째가 배열에서는 k-1을 해줘야 됨

*/