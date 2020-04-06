/*
แบบฝึกหัด 7.4  Slide 118
 2.สร้าง constructor function Accumulator(startingValue)
โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue

*/

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        let temp = prompt("Enter number:");
        this.value +=  Number(temp);
    }
}
let accumulator = new Accumulator(2)
//accumulator.value;
//accumulator.read();
