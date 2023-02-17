const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// 객체 2개 합치기
const resultObj = Object.assign(obj1, obj2);

// obj1 에 obj2 가 들어와서 obj1 이 변함. obj2 는 데이터만 제공해서 변하지 않음.
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("resultObj", resultObj);

// 주소값이 같아 완전히 같은 객체임. obj1 에 합친 뒤 obj1의 주소를 resultObj 에 할당.
console.log(obj1 === resultObj);

resultObj.a = 10;
console.log(obj1);

// 구조 분해 할당
const minObj = {
  name: "송민선",
  age: 29,
  brain: null,
};

// 이미 이름이 있는 변수라면 이름 변경. 기본 값 설정 가능.
const { name: minName, age, brain, girlFriend = "없음" } = minObj;
console.log(minName, age, brain, girlFriend);
