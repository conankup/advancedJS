/*
Slide AdvancedJS Part2 page 169
6.10.  แบบฝึกหัด
1.ให้ arr เป็น Array
สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
*/

function unique(arr) {
     /* your code */
    return Array.from(new Set(arr));
   }
   
   let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
   
   alert( unique(values) ); // Hare, Krishna, :-O
   