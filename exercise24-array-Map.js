/*
Slide AdvancedJS Part2 page 131-136
4.10  แบบฝึกหัด ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
*/

/*
2.1  array1 = [1, 2, 30, 400] 
     array2 [30, 400] // filter เลขที่มากกว่า 10
*/
let result1 = [1, 2, 30, 400].filter((value) => value > 10);
console.log(result1);

/*
2.2  array1 = [1, 2, 3, 4]
     array2 [1, 3] // filter เลขคี่
*/
let result2 = [1, 2, 3, 4].filter((value) => value % 2 == 1);
console.log(result2);

/*
2.3  array1 = [1, "1", 2, {}] 
     array2 [1, 2] // filter Number
*/
let result3 = [1, "1", 2, {}].filter((value) => typeof value == 'number');
console.log(result3);

/*
2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
     array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
*/
let result4 = ["apple", "banana", "orange", "pineapple", "watermeon"].filter((value) => value.length > 6);
console.log(result4);

/*
2.5 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
    array2 [
      { name: "apple", age: 14 },
      { name: "pineapple", age: 16 },
    ] // filter age < 18
*/
let result5 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ].filter((value) => value.age < 18);
console.log(result5);

/*
2.6 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
    array2 [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ] // filter ไม่เอาคนที่อายุ 32
*/
let result6 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ].filter((value) => value.age != 32);
console.log(result6);

/*
2.7  array1 = [1, -3, 2, 8, -4, 5]
     array2 [1, 2, 8, 5] // filter เลขบวก
*/
let result7 = [1, -3, 2, 8, -4, 5].filter((value => value > 0));
console.log(result7);

/*
2.8  array1 = [1,3,4,5,6,7,8]
     array2 [3, 6] // filter เลขหาร 3 ลงตัว
*/
let result8 = [1,3,4,5,6,7,8].filter((value) => value % 3 == 0);
console.log(result8);

/*
2.9  array1 = ["peach", 1, -3, "2", {}, []]
     array2 ["peach", "2"] // filter string
*/
let result9 = ["peach", 1, -3, "2", {}, []].filter((value) => typeof value == 'string');
console.log(result9);

/*
2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
     array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
*/
let result10 = ["APPLE", "appLE", "PEACH", "PEach"].filter((value) => value == value.toUpperCase());
console.log(result10);

/*
2.11 array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
     array2 [
       { name: "banana", birth: "1990-10-10" },
         { name: "peach", birth: "2002-10-13" },
     ] // filter คนเกิดเดือน 10
*/
let result11 = [
      { name: "apple", birth: "2001-01-01" },
      { name: "banana", birth: "1990-10-10" },
      { name: "watermelon", birth: "1985-12-30" },
      { name: "peach", birth: "2002-10-13" },
    ].filter((value) => new Date(value.birth).getMonth() == 9);
console.log(result11);

/*
2.12 array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
     array2 [
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ] // filter คนเกิดก่อนปี 2000
*/
let result12 = [
      { name: "apple", birth: "2001-01-01" },
      { name: "banana", birth: "1990-10-10" },
      { name: "watermelon", birth: "1985-12-30" },
      { name: "peach", birth: "2002-10-13" },
    ].filter((value) => new Date(value.birth).getFullYear() < 2000);
console.log(result12);