function solution(target, arr) {
  return arr.sort((a, b) => a - b).indexOf(target) + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
