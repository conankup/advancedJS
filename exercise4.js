/*
4.7.  Computed Properties - แบบฝึกหัด
    1.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties 
    ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ 
    value เป็นจำนวนของผลไม้ (number) 
    โดยถ้าผลไม้ชนิดไหนที่มีมากกว่า 1 ผล
    ให้เติม s ไปหลัง key นั้นด้วย
*/

console.log("Slide 57 AdvancedJS");
let inputKey = prompt("input key:");
let object = {};

let value = prompt("input value:");
    if (value > 1){
        console.log(inputKey);
        let changKey = inputKey+"s";
        object[changKey] = value;
    }else{
        object[inputKey] = value;
    }
console.log(object);