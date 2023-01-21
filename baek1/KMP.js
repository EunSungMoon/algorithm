function solution(word) {
  let splitedWord = word.split('')
  let upperCase = splitedWord.filter(el => el === el.toUpperCase()&& !el.includes('-') )
  console.log(upperCase.join(''));
}
solution('Knuth-Morris-Pratt')