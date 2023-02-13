let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

const boy = {
  name: "Mike",
  sayHello,
};

const girl = {
  name: "Jane",
  sayHallo,
};

boy.sayHello(); // 화살표 함수
girl.sayHallo(); // 함수표현식
