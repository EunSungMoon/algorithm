function solution(nums) {
  let nm = nums[0].split(' ').map(Number)
  let n = nm.shift()
  let m = nm.shift()
  let cards = nums[1].split(' ').map(Number)
  let picked = new Array(n)
  picked.fill(false, 0, n)

  let min = 300000
  let sum = 0
  let answer = 0
  sol(3, 0)
  console.log(answer)

  function sol(last, start) {
    if (last === 0) {
      if (sum <= m && m - sum < min) {
        min = m - sum
        answer = sum
        return sum
      }
    }

    for (let i = start; i < cards.length; i++) {
      if (!picked[i]) {
        picked[i] = true;
        sum += cards[i];
        sol(last - 1, i)
        picked[i] = false
        sum -= cards[i]
        console.log(sum);
      }
    }
  }

  console.log(picked);
}
solution(['5 21', '5 6 7 8 9'])