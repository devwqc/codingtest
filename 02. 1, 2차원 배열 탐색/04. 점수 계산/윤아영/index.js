function solution(arr) {
  let answer = 0;
  let score = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 1;
      continue;
    }

    answer += score;
    score += 1;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
