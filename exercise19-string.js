/*
Slide AdvancedJS Part2 page 60
2.11.  แบบฝึกหัด
3.	เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า 
string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม
ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”


*/
function truncate(str, maxlength) {
    if(str.length <= maxlength){
        alert(`${str}`);
    }else{
        alert(`${str.slice(0, maxlength-1)}...`)
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20))

