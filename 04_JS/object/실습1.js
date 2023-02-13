const pororo = {
  name: "뽀로로",
  age: 7,

  // 정석은 say: function () {}
  say() {
    console.log("뽀로로는 귀엽습니다");
  },
};

console.log(pororo.name);
console.log(pororo["age"]);

pororo.gender = "M";
console.log(pororo);

pororo["height"] = 130;
console.log(pororo);

delete pororo.gender;
console.log(pororo);

pororo.say();
