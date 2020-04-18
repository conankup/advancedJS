/*
Slide AdvancedJS Part2 page 90
3.11.  แบบฝึกหัด
2.	ให้ทำตามขั้นตอนต่อไปนี้
สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
เพิ่ม “Rock-n-Roll” ต่อท้าย
นำค่า Classics ไปทับค่าตรงกลางของ Array
นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
*/
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Rool");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);