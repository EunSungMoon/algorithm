function solution(words) {
  const input = words.toString().split(' ').slice(1)
  console.log(input);

  const letters = []
  let result = ''
  input.map((el) => {
    const letter = el[0]
    return (
      letters.push(letter)
    )
  })

  for (let i = 97; i < 123; i++) {
    let count = letters.filter((el) => el === String.fromCharCode(i)).length
    if (count >= 5) {
      result += String.fromCharCode(i)
    }
  }
  result === '' ? console.log('PREDAJA') : console.log(result)
}

solution(['18 babic keksic boric bukic sarmic balic kruzic hrenovkic beslic boksic krafnic pecivic klavirkovic kukumaric sunkic kolacic kovacic prijestolonasljednikovi'])