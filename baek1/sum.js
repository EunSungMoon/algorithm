function solution(num) {
  console.log((num+"").split("").reduce((acc,cur)=>acc+parseInt(cur),0))
}

solution(54321)