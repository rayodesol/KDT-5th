// if 문
if (false) {
  console.log("true 입니다");
} else if (true) {
  console.log("elseif 문 내부 입니다");
} else {
  console.log("false 입니다");
}

// 조건 비교
let age = 39;
age += 2;

if (age <= 40) {
  console.log("당신은 MZ 입니다");
} else {
  console.log("당신은 X 세대 입니다");
}

age = 29;
if (age > 40) {
  console.log("당신은 늙었습니다");
} else if (age <= 40 && age >= 20) {
  console.log("당신은 MZ 입니다");
} else {
  console.log("당신은 애기 입니다");
}

// if 중첩
let isOld = true;
let isRich = false;

if (isOld) {
  if (isRich) {
    console.log("망했어요");
  } else {
    console.log("낫 베드");
  }
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}

// NOT 연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if (!isAdult) {
  console.log("돌아가");
} else {
  console.log("통과");
}

// 다중 비교
// 여성이고, 이름이 Jane 이거나 성인이면 통과
let gender = "M";
let name = "Tom";
let isAdultTom = true;

if (gender === "F" && (name === "Jane" || isAdultTom === true)) {
  console.log("통과");
} else {
  console.log("돌아가");
}
