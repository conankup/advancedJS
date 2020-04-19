/*
Slide AdvancedJS Part2 page 171
6.10.  แบบฝึกหัด
3.เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
alert(keys); 
