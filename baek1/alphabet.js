function solution(word) {
  let words = word.split('')
  let arr = new Array(26).fill(0);

  words.map(i => { 
    let alpha = i.charCodeAt(i) - 97
    arr[alpha]++
  })
  console.log(arr.join(' '));
}
solution('baekjoon')