// while 문 기본

// 1번 타입
let index = 0;

while (index < 10) {
  console.log(`인사를 ${index + 1} 번째 드립니다😎`);
  index++;
}

// 2번 타입
let index2 = 0;

while (true) {
  // 무한히 돎
  console.log(`인사를 ${index2 + 1} 번째 드립니다`);
  index2++;
  if (index2 > 10) {
    break;
  }
}

// do-while 비교
// 둘 다 조건식에 부합하지 않지만, do-while은 1번 실행, while은 실행되지 않음.
let idx1 = 0;
do {
  console.log(`do-while 인덱스는 ${idx1} 입니다`);
  idx1++;
} while (idx1 > 10);

let idx2 = 0;
while (idx2 > 10) {
  console.log(`while 인덱스는 ${idx2} 입니다`);
  idx2++;
}
