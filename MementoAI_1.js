function solution(arr) {
  const minNum = Math.min(...arr);
  const result = arr.filter((num) => num !== minNum);

  return result.length ? result : [-1];
}

const test1 = [4, 3, 2, 1];
const test2 = [10];

console.log(
  '1번 문제 입력: ' + test1 + ' 기대: [4, 3, 2] 결과: ' + solution(test1)
);
console.log('1번 문제 입력: ' + test2 + ' 기대: [-1] 결과: ' + solution(test2));
