function solution(nums) {
  const result = nums.toString().split(',').map(Number).sort((a,b)=>a-b)[1]

  console.log(result);
}
solution(['20', '30', '10'])