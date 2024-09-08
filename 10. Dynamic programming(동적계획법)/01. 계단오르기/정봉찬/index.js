/*
✅문제 제목: 계단오르기

✅문제 유형: DP

✅문제 풀이 날짜: 2024-09-09

💡문제 분석 요약
  - 한 번에 한 계단 또는 두 계단씩 올라간다.
  - N계단이 있을 때 올라갈 수 있는 방법의 수는 몇 가지인가?

💡알고리즘 설계
  - ⭐ DFS 풀이.
  - 재귀함수로 레벨(계단)을 매개변수로 받는다.
  - 첫 호출 시 1을 인수로 넘겨준다.
  - 레벨이 n보다 크거나 같으면 answer을 1더하고 return한다.
  - 재귀함수를 레벨 + 1(한 계단), 레벨 + 2(두 계단)을 각각 호출한다.
*/

function solution(n) {
  let answer = 0;

  function DFS(L) {
    if (L >= n) {
      answer++;
      return;
    }

    DFS(L + 1);
    DFS(L + 2);
  }

  DFS(1);

  return answer;
}

console.log(solution(7)); // 21
