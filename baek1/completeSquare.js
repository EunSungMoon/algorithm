function solution(nums) {
  let [min, max] = nums.toString().split(' ').map(Number)
  let rootMin = Math.ceil(Math.sqrt(min));
  let rootMax = Math.ceil(Math.sqrt(max))
  // 맵핑 함수의 첫 번째 인자 언더스코어(_) 는 특별한 인자가 아니라,
  // 불필요한 인자의 공간을 채우기 위한 용도입니다.
  if (rootMin > rootMax) {
    console.log(-1);
  } else {
    let arr = Array.from({ length: rootMax - rootMin + 1 }, (_, i) => rootMin + i)
    console.log(arr);
    console.log(arr.reduce((acc, cur) => acc + cur * cur, 0));
    console.log(rootMin * rootMin);

  }
  console.log(Array.from({ length: rootMax - rootMin - 1 }, (_, i) => rootMin + i));
}
solution(['60 100'])