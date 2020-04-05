/*
4.7.  Computed Properties - แบบฝึกหัด
    1.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
    จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object 
    หลังจากนั้น console.log() object นั้นออกมา
*/

console.log("Slide 56 AdvancedJS");
let inputKey = prompt("input key:");
let object = {};
while(inputKey !== "stop"){
    let value = prompt("input value:");
    object[inputKey] = value;
    inputKey = prompt("input key:");
}
console.log(object);
