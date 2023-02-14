// parentNode 사용 - 삭제 시 리스트 1줄 삭제할 때

const inputTask = document.querySelector(".input-task"); // 입력창
const addBtn = document.querySelector(".input-btn"); // "추가" 버튼
const todoList = document.querySelector(".todo-list"); // ul

// 내용 입력, 추가 버튼 -> 할 일 추가
// 그냥 추가 버튼 -> placeholder
// 체크 버튼 -> line-through
// 삭제 버튼 -> 목록 삭제 -> remove()

/////// ok //// 입력 값 받아오기
// const newTask = document.querySelector(".input-task").value;
// console.log(newTask);

/////// ok //// 추가 버튼 누를 때
addBtn.addEventListener("click", function () {
  const newTask = document.querySelector(".input-task").value; // 입력 값 받아오기
  // console.log(newTask);

  if (newTask === "") {
    // 입력내용 없을 때, placeholder
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
  } else {
    addList(newTask);
    inputTask.value = "";
    // console.log(todoList);
  }
});

/////// ok //// 함수 - 리스트 1줄 만들기
function addList(content) {
  const li = document.createElement("li");
  li.textContent = content;

  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  li.prepend(checkBtn);

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  li.append(delBtn);

  todoList.append(li);
}

// /////// ok //// 리스트 1줄 만들기
// const li = document.createElement("li");
// li.textContent = "입력 받은 값";

// const checkBtn = document.createElement("input");
// checkBtn.setAttribute("type", "checkbox");
// li.prepend(checkBtn);

// const delBtn = document.createElement("button");
// delBtn.textContent = "삭제";
// li.append(delBtn);

// todoList.append(li);

// //////////////////////////////////////////////// 힌트
// // 체크 박스
// const checkBtn = document.createElement("input");
// checkBtn.setAttribute("type", "checkbox");

// checkBtn.addEventListener("click", function () {
//   if (checkBtn.checked === true) {
//     checkBtn.parentNode.style.textDecoration = "line-through";
//   } else {
//     checkBtn.parentNode.style.textDecoration = "none";
//   }
// });

// addLi.append(checkBtn);
