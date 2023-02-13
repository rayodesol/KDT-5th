// 생성자 함수 생성
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = function () {
    console.log(`성함은 ${this.name} 입니다`);
  };
}

let user1 = new Kdt("송민선", "F");
let user2 = new Kdt("김성현", "M");
let user3 = new Kdt("윤제", "M");
let user4 = new Kdt("송수빈", "F");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

user1.showName();
user2.showName();
user3.showName();
user4.showName();
