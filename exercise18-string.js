/*
Slide AdvancedJS Part2 page 59
2.11.  แบบฝึกหัด
2.	เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” 
หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

*/
function checkSpam(string) {
    if(string.includes("xxx") || string.includes("viagra")){
        return true;
    }else{
        return false;
    }
}
console.log(checkSpam("codecamponlinexxx"));
console.log(checkSpam("codecamponline5"));
console.log(checkSpam("text viagra"));



