function solution(nums) {
  let input =nums.slice(1,nums.length)
  input.sort((a,b)=>a-b)
  for(let i=0;i<input.length; i++){
    console.log(input[i]);
  }
}
solution([5, 5, 4, 2, 1, 3])