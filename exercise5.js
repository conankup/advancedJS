/*
4.18.  Computed Properties - แบบฝึกหัด
    1.	ให้ทำตามคำสั่งต่อไปนี้
            สร้าง Object เปล่าขึ้นมา
            เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
            เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
            เปลี่ยน properties name เป็น “Boy”
            ลบ properties name ออกจาก Object
*/

console.log("Slide 78 AdvancedJS");
let obj = {};
obj.name = "Sonter"
obj.surname = "Pakorn"
obj.name = "Boy"
delete obj.name