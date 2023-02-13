// 클래스 선언
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  }
}

// 클래스 상속
// Car 를 확장해서 ElecCar 를 만들겠다
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color); // 부모의 값을 받아오겠다
    this.fuel = fuel;
  }

  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  }

  // Overriding
  showSpec() {
    super.showSpec(); // 부모 메소드에 접근
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
    // console.log(
    //   `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`
    // );
  }
}

const hyundai = new Car("hyundai", "blue");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electricity");
tesla.showSpec();
// tesla.showFuel();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
