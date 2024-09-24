// 아스키코드로 A는 65, a는 97 대문자가 소문자보다 더 작다.
// 아스키코드를 활용해서 풀면 될 듯.

function solution(s) {
  return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}

const test1 = 'Zbcdefg';
const test2 = 'zZbcdefg';
console.log(
  '2번 문제 입력: ' + test1 + ' 기대: gfedcbZ 결과: ' + solution(test1)
);
console.log(
  '2번 문제 입력: ' + test2 + ' 기대: zgfedcbZ 결과: ' + solution(test2)
);
