const calendar = document.querySelector("table"); // 달력 전체
const date = document.querySelector("#date"); // 날짜 뜨는 창
const input = document.getElementById("content"); // 내용 입력창

// 클릭 된 요소를 저장하기 위한 전역 변수
// 내가 클릭한 td의 위치
let targetEl;

function calendarTask(e) {
  // console.log(e.target);
  // console.log(e.target.tagName);

  if (e.target.tagName === "P") {
    // 날짜 클릭할 때
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    // 날짜 칸 클릭할 때
    const day = e.target.children[0].textContent; // children 이 배열. <p>는 children의 첫번째 요소.
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    // <div>의 삭제 기능 추가 - 방법2
    e.target.remove();
  }
}

function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  } else if (date.value === "") {
    date.setAttribute("placholder", "날짜를 선택하세요!");
    return;
  }

  // <div> 생성
  const addDiv = document.createElement("div");
  addDiv.textContent = input.value; // <div> 내용을 입력된 내용으로 바꾸기

  // // <div>의 삭제 기능 추가 - 방법1
  // // <div> 클릭 시 삭제되는 기능 추가
  // addDiv.addEventListener("click", function () {
  //   addDiv.remove();
  // });

  // <td> 아래 <div> 추가
  targetEl.append(addDiv);

  // 입력창 비우기
  input.value = "";
}

// 달력 내부에서 클릭이 일어날 때
calendar.addEventListener("click", calendarTask);
