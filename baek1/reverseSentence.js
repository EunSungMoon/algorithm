function solution(sentence) {
  let sentenceSplit = sentence.slice(0, 4)

  let sentenceReverse = sentenceSplit.map(i => i.split('').reverse().join(''))
  console.log(sentenceReverse);

}
solution(['!edoc doog a tahW', 'noitacitsufbo', 'erafraw enirambus detcirtsernu yraurbeF fo tsrif eht no nigeb ot dnetni eW', 'lla sees rodroM fo drol eht, ssertrof sih nihtiw delaecnoC', 'END'])