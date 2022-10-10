function solution(word) {
  let input = word.split('').reverse().join('')
  if(input===word){
    console.log(1)
  } else{
    console.log(0)
  }
  console.log(input)
}
solution('level')