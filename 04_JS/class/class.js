// 생성자 함수 버전
const hyundai = new ConstructorCar("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color} 색 자동차가 주행 중입니다!`);
  };
}

// 클래스 버전
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand}의 ${this.color} 색 자동차가 주행 중입니다!`);
  }
}

const porsche = new ClassCar("porsche", "black");

console.log(porsche);
porsche.drive();
