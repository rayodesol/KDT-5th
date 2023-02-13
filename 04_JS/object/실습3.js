// 생성자 함수 선언
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showData = function () {
    console.log(`이름은 ${this.name} 이고, 성별은 ${this.gender} 입니다.`);
  };
}

// 객체 생성
let user1 = new Kdt("김성현", "M");
let user2 = new Kdt("백진솔", "F");
let user3 = new Kdt("윤제", "M");
let user4 = new Kdt("송민선", "F");
let user5 = new Kdt("송수빈", "F");

user1.showData();
user2.showData();
user3.showData();
user4.showData();
user5.showData();
