// 내 코드
const calendar = document.querySelector("table"); // 달력 전체
const date = document.querySelector("#date"); // 날짜 뜨는 창
const content = document.querySelector("#content"); // 내용 입력창

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

// 작성 버튼 클릭 시
function writeSchedule() {
  if (content.value === "") {
    return;
  }

  // <div> 생성
  const El = document.createElement("div");
  El.setAttribute("style", "position: absolute");

  // 클릭하면 삭제 되는 기능 추가
  El.addEventListener("click", function () {
    El.remove();
  });

  // div 에 내용 입력
  El.append(content.value);
  console.log(El);

  // <td> 아래 <div> 넣기
  targetEl.append(El);

  // 입력창 비우기
  content.value = "";
}

// 날짜 누르면 날짜 text 창에 해당 날짜 뜨기
// 내용 text 창에 입력 후 작성 버튼 누르면, 해당 날짜에 내용 추가
// 추가된 내용 누르면 삭제

// 날짜 누를 때, 날짜 text 창에 해당 날짜 뜨기
calendar.addEventListener("click", function (e) {
  // <td>로 통일
  if (e.target.tagName === "P") {
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    targetEl = e.target;
  }
  date.value = "2023년 2월 " + targetEl.innerText + "일";
});
