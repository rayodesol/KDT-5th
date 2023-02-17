// 문자열 : 일종의 배열
const str = "Hello, World! World";

// 문자열 길이. 공백도 문자열.
console.log(str.length);

// 배열처럼 for문 사용 가능
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// but, 문자열에 map 같은 배열 관련 함수는 사용 못함

// 특정 문자열 찾기. 문자열의 첫번째 인덱스 출력. -1 이 나오면 못 찾았다는 것.
// 대/소문자 구분함. 같은 문자열이 여러 개면 맨 처음 문자열의 인덱스 출력.
console.log(str.indexOf("World"));

// 문자열 자르기. (0, 5) -> [0]~[4]
console.log(str.slice(0, 5));
console.log(str.slice(0, str.indexOf("World"))); // [0]부터 World가 나오기 전까지 자르기

// 문자열 바꾸기
console.log(str.replace("World", "뽀로로"));
console.log(str); // 원본은 바뀌지 않음

// 문자열 반복하기
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

// 앞 뒤 공백 문자 제거하기
const str3 = "       Hello, world           ";
console.log(str3.trim());
