let today = new Date().getDay();
let day;

if (today === 0) {
  day = "일요일";
} else if (today === 1) {
  day = "월요일";
} else if (today === 2) {
  day = "화요일";
} else if (today === 3) {
  day = "수요일";
} else if (today === 4) {
  day = "목요일";
} else if (today === 5) {
  day = "금요일";
} else if (today === 6) {
  day = "토요일";
}

alert(day);

// 강사님 코드 ------------------------------------ 깃허브 확인해보기!
// 1줄이면 {} 없이 작성 가능
if (today === 0) alert("일요일");
else if (today === 1) alert("월요일");
else if (today === 2) alert("화요일");
else if (today === 3) alert("수요일");
else if (today === 4) alert("목요일");
else if (today === 5) alert("금요일");
else alert("토요일");
