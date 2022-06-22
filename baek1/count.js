function solution(num, arr, findSum) {
  let count=0;
  arr.forEach(v=>{
    if(v===findSum){
      count++
    }
  })
console.log(count);
}

solution(11, [1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4], 2)