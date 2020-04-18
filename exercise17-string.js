/*
Slide AdvancedJS Part2 page 58
2.11.  แบบฝึกหัด
เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม
แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

*/
function ucFirst(string) {
    alert(string[0].toUpperCase() + string.substring(1));
}
ucFirst("jaruk");


