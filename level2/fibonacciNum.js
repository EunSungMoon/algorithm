function solution(n) {
  let fNum = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;

  }
  return fNum[n]
}

/*
1234567로 나누는 이유
우선 말씀드리겠습니다. 문제가 틀린 거 아닙니다!!
컴퓨터공학에 대해서 설명하기 때문에 글이 좀 깁니다. 긴 글이 싫다 하면 맨 밑에 한줄요약을 읽어주세용

일반적인 프로그래밍 언어는 CPU에서 제공하는 최소 읽기 단위(word라고 하는 것으로 기억합니다)를 기준으로 변수의 범위를 지정합니다. 
일반적인 x86 시스템(인텔이나 AMD가 만든 그거입니다)은 word의 크기가 4byte라고 가정하며, 그렇기 때문에 int라는 자료형은 -2,147,483,648 ~ 2,147,483,647까지의 값만을 표현할 수 있습니다(계산해보시면 총 숫자 개수가232 개입니다. 1 바이트는 8비트니까요)
그래서 프로그래밍을 하면 정수의 범위에 정말! 정말!! 신경을 쓰셔야 합니다. 예를 들어서 2,147,483,647을 저장하고 있는 int 변수에 1을 더하면 그 숫자는 2,147,483,648이 아닌, -2,147,483,648이 됩니다
(이는 2의 보수라는 개념으로 인해서 발생하는데, 관심이 있으시면 구글에서 검색해보세요). 
다시 말해서, 각각의 변수가 사용하는 자료형은 사용할 수 있는 숫자의 범위가 있고, 이를 벗어나면 예상치 못한 이상한 결과를 내놓는다는 겁니다. 
이는 이 글을 보고 계시는 분이 지금 사용하시는 프로그래밍 언어가 1바이트 하나도 소중히 여겨서 프로그래밍 해야하는 시절에 설계됐으며, 그렇기에 프로그래머가 알아서 변수를 범위 내에 둘 만큼 현명하다고 상정하고 있기 때문입니다.
그런데 피보나치 수는 엄청나게 빠르게 증가합니다. 44번째 피보나치 수만 가도 2,971,215,073로 int 범위를 넘어버립니다. 이대로면 피보나치의 수를 구하라는 문제는 int를 사용할 수가 없겠지요? 그런데 우리에게는 고마운 성질이 있습니다. 
숫자 A, B, C가 있다고 하면 (A + B) % C의 값은 ( ( A % C ) + ( B % C) ) % C와 같다는 성질입니다. 이 외에도 여러가지 있는데 알고 싶으시다면 모듈러 연산의 성질을 검색해보세요.
그래서 문제가 1234567로 나눈 나머지를 출력하라고 하는 겁니다. 조금만 숫자가 커져도 피보나치는 int로 표현할 수 있는 범위를 넘겨버리는데, 매번 1234567로 나눈 나머지만을 저장하는 것은 int의 범위에서 가뿐하니까요(당연하다면 당연하지만, 1234567로 나눈 나머지는 항상 1234567보다 작습니다). 
이 글을 읽고 계시는 분이 문제를 풀 수 없었던 이유는, n번째 피보나치 수라고 구한 숫자가, 이미 int의 범위를 넘긴 상태라 엉망진창이 된 상태일 것이고, 이것을 1234567로 나눈다고 한들 정확한 값을 구하는 것은 불가능했기 때문입니다. 
지문이 명백히 잘못된 것이 아니라, 이미 잘못된 값의 나머지 값을 답으로 내놓으셨으니, 정답이 아니라고 한 것입니다. 
요약하자면! 열심히 피보나치 수를 계산한 다음에 나올 수를 1234567로 나눈 나머지는 각 연산을 수행할 때마다 1234567로 나누는 것과 완벽하게 동일한 숫자가 나온다는 겁니다!! 절대 문제 설명이 잘못된 게 아니에요!!!
혹시나 이것이 믿겨지지 않는다면 자체적으로 자료형 구분 없이 큰 수를 저장할 수 있는 Python등의 언어를 사용해서 오류가 났던 그대로 구현해보세요. 전부 정답 처리 될 것입니다.

한줄요약: 문제에서 1234567로 나눈 나머지를 정답으로 내놓으라는 것은 문제를 꼰 것이 아니라 int 자료형의 범위 내에 항상 값이 있을 수 있도록 한 배려이며, 
자료형의 크기에 제한이 있는 언어를 쓸 경우 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용해서 매번 계산 결과에 1234567으로 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.
*/