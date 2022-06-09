function solution(skill, skill_trees) {
  let result = 0;

  //skill의 요소들이 있는지 확인 있다면 그 요소를 순서대로 반환
  let filteredTrees = skill_trees.map(tree => {
    return tree.split("").filter(ele => skill.includes(ele))
  });

  //가능한 스킬트리인지 확인
  for (let i = 0; i < filteredTrees.length; i++) {
    // filteredTrees =>
    // 0: (3) ['B', 'C', 'D']
    // 1: (3)['C', 'B', 'D']
    // 2: (2)['C', 'B']
    // 3: (2)['B', 'D']
    let isValid = true;
    for (let j = 0; j < filteredTrees[i].length; j++) {
      // filteredTrees[i].length
      // 3,3,3,3,2,2,2
      // console.log(filteredTrees[i][j]);
      if (skill[j] !== filteredTrees[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }

  return result;
}
solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])

function solution(skill, skill_trees) {
  function isCorrect(n) {

    let test = skill.split('');
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
