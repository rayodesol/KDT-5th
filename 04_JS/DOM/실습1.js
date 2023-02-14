// let orangeEl = document.querySelector(".orange");
// console.log(orangeEl);

// let skyblueEl = document.querySelector("#skyblue");
// console.log(skyblueEl);

// let listEl = document.querySelector("ul>li:nth-child(2)");
// listEl.classList.add("orange");
// console.log(listEl);

// let firstOrangeEl = document.querySelector(".orange");
// if (firstOrangeEl.classList.contains("orange")) {
//   firstOrangeEl.classList.remove("orange");
// }
// console.log(firstOrangeEl);

// 강사님 코드
const orangeClassEl = document.querySelector(".orange");
console.log(orangeClassEl);

const skyblueIDEl = document.getElementById("skyblue");
console.log(skyblueIDEl);

const secondLiEl = document.querySelector("ul>li:nth-child(2)");
secondLiEl.classList.add("orange");
console.log(secondLiEl);

if (orangeClassEl.classList.contains("orange")) {
  orangeClassEl.classList.remove("orange");
}
console.log(orangeClassEl);
