// 생성자 함수
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  };
}

// 생성자 함수로 상속
function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color); // 생성자 함수에서 기본적으로 제공하는 함수. super와 같은 역할.
  this.fuel = fuel;

  this.drive = function () {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}로 주행 중입니다.`
    );
  };
}

// Object ; 객체의 최상위 클래스 생성자 함수
ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar("tesla", "white", "electricity");
tesla.drive();
