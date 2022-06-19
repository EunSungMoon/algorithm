function solution(word) {
  const word1 = word.toUpperCase()
  const array = new Array(26).fill(0);

  for (let i = 0; i <= word.length; i++) {
    array[word1.charCodeAt(i) - 65]++
  }

  const max = Math.max(...array);
  let result2 = array.filter(val => val === max).length === 1 ?
    String.fromCharCode(array.findIndex(val => val === max) + 65) : '?';
  console.log(result2);
}
solution('Mississipi')