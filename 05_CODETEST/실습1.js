let nums = [-1.23, 13, 14.52, -33.53, 30];

// 배열의 최대, 최소 값 찾은 다음 소수점 버리기
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.max(...nums))); // -34 출력. 음수 버림은 숫자가 작아짐.
// console.log(Math.trunc(Math.min(...nums)));

// 절댓값의 평균 구하기
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]);
}
console.log(sum / nums.length);

// 0 ~ 100 까지의 숫자 중에서 랜덤한 정수 만들기
// 보통은 이렇게 많이 씀. "0 ~ 99 까지"가 더 정확한 표현
console.log(Math.floor(Math.random() * 100));

// 100까지 자주 나오게끔.
console.log(Math.floor(Math.random() * 100.9));
console.log(Math.floor(Math.random() * 101)); // 아주 적은 확률로 101이 나올수도
