const boxEl = document.querySelector(".box");

boxEl.classList.add("orange");

const thirdBoxEl = document.getElementById("third");
thirdBoxEl.classList.remove("box");

// 해당 요소가 있으면 true
console.log(boxEl.classList.contains("box"));
console.log(thirdBoxEl.classList.contains("box"));
