// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.getElementById("content");
// 클릭 된 요소를 저장하기 위한 전역 변수

// 내가 클릭한 td의 위치
let targetEl;

function calendarTask(e) {
  // 달력 내부에서 클릭 되는 요소에 따라서 다르게 처리

  // P 태그 --> 날짜를 클릭 했을 때!
  if (e.target.tagName === "P") {
    // P 태그의 컨텐츠가 날짜이므로 e.target(현재 P 태그)의 textContent 를
    // 날짜로 부여
    date.value = `2023년 2월 ${e.target.textContent}일`;
    // 스케쥴을 추가해야할 td 태그는 p 태그의 부모 요소이므로 parentNode 로 접근 한 다음
    // 해당 위치 정보를 전역 변수인 targetEl 에 저장
    targetEl = e.target.parentNode;

    // TD 태그 --> 날짜 주변의 공간을 클릭
  } else if (e.target.tagName === "TD") {
    // 날짜 정보가 있는 p 태그는 TD 태그의 첫번째 자식이므로
    // children[0] 으로 p 태그에 접근하여 날짜 정보를 가져오기
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;

    // 스케쥴을 추가할 td 태그는 이미 클릭한 요소이므로 바로 저장
    targetEl = e.target;

    // DIV 태그가 선택이 되면, 이건 추가 된 스케쥴이라는 의미이므로
    // 바로 삭제 처리
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}

function writeSchedule() {
  // 날짜, 또는 스케쥴 내용이 입력 안되었을 때의 예외 처리
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  }

  // 스케쥴 추가를 위한 div 요소 만들기
  const addDiv = document.createElement("div");
  // 만들어진 div 요소의 컨텐츠로 인풋 태그의 내용 넣어주기
  addDiv.textContent = input.value;

  // addDiv.addEventListener("click", function () {
  //   addDiv.remove();
  // })

  // 전역에 저장 된, td 위치에 추가 될 스케쥴인 div 태그를 자식으로 추가
  targetEl.append(addDiv);
  // 할 일 input 요소를 초기화
  input.value = "";
}

// 달력에서 발생하는 클릭에만 이벤트가 발생하도록 addEventListener 처리
calendar.addEventListener("click", calendarTask);
