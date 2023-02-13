const kdt = ["김성현", "백진솔", "윤제", "송민선", "송수빈"];

kdt.push("민선");
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift("민선");
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(`${i + 1}번째 사람: ${kdt[i]}`);
}
