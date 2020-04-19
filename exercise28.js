/*
Slide AdvancedJS Part2 page 176
7.2  แบบฝึกหัด
1.เกำหนดให้ salaries เป็น Object
ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


*/
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries) ){
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650
  