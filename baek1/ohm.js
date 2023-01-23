function solution(input) {
  const table = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ]

  console.log(
    table.indexOf(input[0]).toString() +
    table.indexOf(input[1]).toString() +
    '0'.repeat(table.indexOf(input[2])).toString())

    console.log(table.indexOf(input[0]).toString())
}

solution(['yellow', 'violet', 'red'])