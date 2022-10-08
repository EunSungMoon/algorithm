function solution(num) {
  let change = 1000 - num
  let answer = 0;
  let changeArr = [500, 100, 50, 10, 5, 1]
  changeArr.map((i) => {
    let quo = Math.floor(change / i)
    console.log(`change ${change}`)
    console.log(`quo ${quo}`)
    console.log(`answer ${answer}`)
    change -= quo * i
    answer += quo
  })
  console.log(answer)
  //500, 100, 50, 10, 5, 1
}
solution(380)
