let isAdult = false;
let isVIP = false;
let isDrunken = true;
let money = false;

if (money || (!isDrunken && (isAdult || isVIP))) {
  console.log("통과");
} else {
  console.log("돌아가");
}

// 강사님 코드
const 송민선 = {
  성인인가: true,
  VIP: false,
  취했는가: true,
  돈: false,
};

if (((송민선.성인인가 || 송민선.VIP) && !송민선.취했는가) || 송민선.돈) {
  console.log("통과");
} else {
  console.log("돌아가");
}

// 중요한 것을 앞에 써서 가독성 높이면 좋음!
if (송민선.돈 || (!송민선.취했는가 && (송민선.성인인가 || 송민선.VIP))) {
} else {
}
