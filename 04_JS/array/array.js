const kdt = ["김성현", "백진솔", "윤제", "송민선", "송수빈"];

// 3번째 사람 출력
console.log(kdt[2]);

// 배열의 길이
console.log(kdt.length);

// 데이터 값 변경
kdt[3] = "민선";
console.log(kdt[3]);

// 배열 끝에 추가 push()
console.log(kdt.push("newbie")); // 배열 길이 남김
console.log(kdt);

// 배열 끝 요소 제거
console.log(kdt.pop()); // 어떤 값을 빼냈는지 남김
console.log(kdt);

// 배열 제일 앞 요소 추가/제거
console.log(kdt.unshift("이효석")); // 배열 길이 남김
console.log(kdt);

console.log(kdt.shift()); // 어떤 값을 빼냈는지 남김
console.log(kdt);

// 반복문으로 kdt 모든 요소 출력
for (let i = 0; i < kdt.length; i++) {
  console.log(`${i + 1}번째 사람: ${kdt[i]}`);
}
