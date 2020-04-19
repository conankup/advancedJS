/*
Slide AdvancedJS Part2 page 176
7.2  แบบฝึกหัด
2.ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

*/
function count(obj){
  return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

  