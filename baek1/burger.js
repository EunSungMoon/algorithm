function solution(arr) {
  let burger = arr.slice(0, 2);
  let drink = arr.slice(3);

  let setMenu = Math.min(...burger) + Math.min(...drink) - 50
  console.log(setMenu);
}
solution([800, 700, 900, 198, 330])