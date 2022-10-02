function solution(num) {

  // for(let i=1;i<num;i++){
  //   let target = i
  //   let s = i.toString()
  //   for(let j=0;j<s.length;j++){
  //     target += parseInt(s[j])
  //   }
  //   if(target == num){
  //     console.log(i)
  //     break;
  //   }
  // }

  for (let i = 1; i <= num; i++) {
    let value = i.toString().split('').map(v => +v).reduce((acc, cur) => acc + cur, 0)
    let total = i + value
    if (total === num) {
      console.log(i)
      break;
    }
  }
}
solution(216)