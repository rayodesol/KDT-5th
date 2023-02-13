class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    // console.log(`넓이는 ${this.width * this.height}`);
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // 그대로 상속 받으므로 오버라이딩 안해도 됨.
  // getArea() {
  //   super.getArea();
  // }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    // console.log(`삼각형의 넓이는 ${(this.width * this.height) / 2}`);
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(); // 값을 받지 않아도 꼭 써야!!
    this.radius = radius;
  }
  // width, height 는 필요 없기 때문에
  // constructor(width, height, radius) {
  //   super(width, height);
  //   this.radius = radius;
  // }

  getArea() {
    // console.log(`원의 넓이는 ${3.14 * this.radius ** 2}`);
    return this.radius ** 2 * 3.14;
  }
}

const rec = new Rectangle(10, 10);
const tri = new Triangle(10, 10);
const cir = new Circle(3);

console.log(rec.getArea());
console.log(tri.getArea());
console.log(cir.getArea());

// const rectangleArea = new Rectangle(3, 4);
// const triangleArea = new Triangle(3, 4);
// const circleArea = new Circle(3, 4, 5);

// rectangleArea.getArea();
// triangleArea.getArea();
// circleArea.getArea();
