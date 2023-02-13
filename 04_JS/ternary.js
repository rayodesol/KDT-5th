// if문
let name = "장근석";

if (name === "송민선") {
  console.log("맞았습니다");
} else {
  console.log("틀렸습니다");
}

// 3항 연산자 ; 위에 if문과 동일한 기능
name === "송민선" ? console.log("맞았음") : console.log("틀렸음");

// 3항 연산자 중첩으로 사용
name === "송민선"
  ? console.log("맞았음")
  : name === "장근석"
  ? console.log("아시아의 프린스")
  : console.log("누구세요?");

// console.log(new Date().getDay()); //오늘 금요일임
