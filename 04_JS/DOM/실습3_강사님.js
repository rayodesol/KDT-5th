const addBtn = document.querySelector(".input-btn"); // "추가"버튼
const todoList = document.querySelector(".todo-list"); // ul
const inputTask = document.querySelector(".input-task"); // 입력창

// 함수는 되도록 상단에 선언

function deleteTask(t) {
  // this를 t로 받은
  t.parentNode.remove(); // 삭제버튼의 부모인 <li>가 지워짐
}

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return; // 함수 종료. else 문으로 중첩되게 쓰는 대신 이런 식으로 사용.
  }

  // <li> 생성
  const addLi = document.createElement("li");

  // 체크박스 생성
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");

  // 체크박스에 addEventListener 추가된 상태로 만들기
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) {
      // checkBtn.parentNode 는 <li>
      checkBtn.parentNode.style.textDecoration = "line-through"; // else문처럼 setAttribute 로도 가능
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration: none");
    }
  });

  // 삭제버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";

  // 삭제버튼 클릭 시 실행 내용
  // // 1) addEventListner 로 하는 방법
  // // 이벤트 객체로 어떤 것이 선택됐는지 받아옴. 삭제버튼 클릭시.
  // deleteBtn.addEventListener("click", function (e) {
  //   e.target.parentNode.remove(); // 부모인 <li> 가 지워짐
  // });

  // 2) onclick 으로 하는 방법
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  // 만든 요소들 연결하기
  addLi.append(checkBtn); // <li> 아래에 체크박스 붙이기
  addLi.append(inputTask.value); // <li> 아래 체크박스 뒤에 입력받은 내용 붙이기
  addLi.append(deleteBtn); // <li> 아래에 삭제버튼 붙이기

  todoList.appendChild(addLi); // <ul> 아래에 <li> 붙이기

  inputTask.value = ""; // 입력창 비우기
}

// 추가버튼 눌렀을 때
// addEventListener 의 익명함수가 길어지면 따로 함수 선언 후 사용하기
addBtn.addEventListener("click", addList);
