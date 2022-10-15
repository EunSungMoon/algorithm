function solution(nums) {
  // let input = nums.slice(1).map(i=>{const[a,b]=i.split( )})
  let N = nums.shift()
  let result = nums.map(v => {
    let [a,b] = v.split(' ')
    let pow=1;
    for(let j=0; j<b; j++){
      pow=(pow*a)%10
    }
    return pow===0?10:pow
  })
  console.log(result.join('\n'))
}
solution(['5', '1 6', '3 7', '6 2', '7 100', '9 635'])