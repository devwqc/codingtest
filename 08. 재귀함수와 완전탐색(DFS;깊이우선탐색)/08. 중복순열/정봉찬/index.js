/*
✅문제 제목: 중복순열

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-22

💡문제 분석 요약
  - 1부터 N까지 번호가 적힌 구슬이 있다.
  - 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력한다.
  - 결과와 총 경우의 수를 출력한다.
  - 출력은 사전순으로 오름차순으로 출력한다.
  - N(3<=N<=10), M(2<=M<=N)

💡알고리즘 설계
  - 
*/

function solution(n, m) {
  let answer = [];

  return answer;
}

console.log(solution(3, 2)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]] 9

/*
✅문제 제목: 중복순열

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-23

💡문제 분석 요약
  - 1부터 N까지 번호가 적힌 구슬이 있다.
  - 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력한다.
  - 결과와 총 경우의 수를 출력한다.
  - 출력은 사전순으로 오름차순으로 출력한다.
  - N(3<=N<=10), M(2<=M<=N)

💡알고리즘 설계
  - 재귀 함수에 인수로 인덱스와 배열을 받는다.
  - 첫 재귀 함수 호출에서 0과 빈배열을 넘겨준다.
  - n만큼 반복문을 돌면서 재귀 함수를 호출한다. 이때 배열에 인덱스 번째 요소에 값을 넣어서 넘겨준다.
*/

function solution2(n, m) {
  let answer = [];

  function DFS(idx, arr) {
    if (idx === m) {
      answer.push(arr);
      return;
    }

    for (let i = 1; i <= n; i++) {
      DFS(idx + 1, [...arr, i]);
    }
  }

  DFS(0, []);

  answer.push(answer.length);

  return answer;
}

console.log(solution2(3, 2)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]] 9
console.log(solution2(4, 3)); // [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 1, 4], [1, 2, 1], ...] 64

/*
✅문제 제목: 중복순열

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-09-04

💡문제 분석 요약
  - 1부터 N까지 번호가 적힌 구슬이 있다.
  - 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력한다.
  - 결과와 총 경우의 수를 출력한다.
  - 출력은 사전순으로 오름차순으로 출력한다.
  - N(3<=N<=10), M(2<=M<=N)

💡알고리즘 설계
  - 재귀함수로 배열을 받는다.
  - 첫 재귀함수 호출로 빈배열을 넘긴다.
  - 1부터 n을 포함한 반복문을 돌면서 재귀함수로 현재 요소와 매개변수를 합친 새로운 배열을 넘겨준다.
*/

function solution3(n, m) {
  let answer = [];

  function DFS(arr) {
    if (arr.length === m) {
      answer.push(arr);
      console.log(arr);
      return;
    }

    for (let i = 1; i <= n; i++) {
      DFS([...arr, i]);
    }
  }

  DFS([]);

  answer = answer.length;

  return answer;
}

console.log(solution3(3, 2)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]] 9
console.log(solution3(4, 3)); // [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 1, 4], [1, 2, 1], ...] 64
