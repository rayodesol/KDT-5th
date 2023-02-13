// const user = {
//   name: "송민선",
//   sayHello: function () {
//     console.log(`안녕하세요. ${this.name} 님`);
//   },
// };

// user.sayHello();

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

const boy = {
  name: "Mike",
  sayHello, // 객체 값으로 가져올 때는 소괄호가 없어야. 소괄호가 있다면 함수 실행.
};

const girl = {
  name: "Jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
sayHello();
