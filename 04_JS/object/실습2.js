const pororo = {
  name: "뽀로로",
  height: 130,
  printName: function () {
    console.log(`이름은 ${this.name}`);
  },
  showHeight,
};

function showHeight() {
  console.log(`키는 ${this.height}`);
}

// 객체에 함수를 추가하는 방법도 가능
pororo.showName = function () {
  console.log(`객체에 함수를 추가하는 방법으로: 이름은 ${this.name}`);
};

pororo.printName();
pororo.showHeight();
pororo.showName();
