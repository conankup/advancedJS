/*
Slide AdvancedJS Part2 page 170
6.10.  แบบฝึกหัด
2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
nap - pan
ear - are - era
cheaters - hectares - teachers

*/
function aclean(arr) {
     let map = new Map();
   
     for (let word of arr) {
       let sorted = word.toLowerCase().split('').sort().join(''); 
       map.set(sorted, word);
     }
   
     return Array.from(map.values());
   }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
