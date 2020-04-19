/*
Slide AdvancedJS Part2 page 125-130
4.10  แบบฝึกหัด
*/

/*
1.1   array1 = [1, 2, 30, 400]
      array2 [2, 4, 60, 800]
*/
const array1 = [1, 2, 30, 400];
const result1 = array1.map((array1) => {
  return array1 * 2;
})
console.log(result1);

/*
1.2   array1 = [1, 2, 3, 4]
      array2 ["1", "2", "3", "4"]
*/
let result2 = [1, 2, 3, 4].map((num) => num.toString());
console.log(result2);

/*
1.3   array1 = [1, "1", 2, {}] 
      array2 ["number", "string", "number", "object"]
*/
let result3 = [1, "1", 2, {}].map((value) => typeof value);
console.log(result3);

/*
1.4   array1 = ["apple", "banana", "orange"]
      array2 ["APPLE", "BANANA", "ORANGE"]
*/
let result4 = ["apple", "banana", "orange"].map((value) => value.toUpperCase());
console.log(result4);

/*
1.5 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 ["apple", "banana", "watermelon"]
*/
let result5 = [
      {name: "apple", age: 14},
      {name: "banana", age: 18},
      {name: "watermelon", age: 32}
].map((value) => value.name);
console.log(result5);

/*
1.6 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 [14, 18, 32]
*/
let result6 = [
      {name: "apple", age: 14},
      {name: "banana", age: 18},
      {name: "watermelon", age: 32}
].map((value) => value.age);
console.log(result6);

/*
1.7 array1 = [
      { name: "apple", surname: "London" },
      { name: "banana", surname: "Bangkok" },
      { name: "watermelon", surname: "Singapore" },
    ]
    array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
*/
let result7 = [
      {name: "apple", surname: "London"},
      {name: "banana", surname: "Bangkok"},
      {name: "watermelon", surname: "Singapore"}
].map((value) => `${value.name} ${value.surname}`);
console.log(result7);

/*
1.8 array1 = [1,3,4,5,6,7,8]
    array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
*/
let result8 = [1,3,4,5,6,7,8].map((value) => {
     if (value % 2 == 0) return "even";
     return "odd";
});
console.log(result8);

/*
1.9 array1 = [1, -3, 2, 8, -4, 5]
    array2 [1, 3, 2, 8, 4, 5]
*/
let result9 = [1, -3, 2, 8, -4, 5].map((value) => Math.abs(value));
console.log(result9);

/*
1.10 array1 = [100, 200.25, 300.84, 400.3]
     array2 ["100.00", "200.25", "300.84", "400.30"]
*/
let result10 = [100, 200.25, 300.84, 400.3].map((value) => value.toFixed(2));
console.log(result10);

/*
1.11 array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-01" },
       { name: "watermelon", birth: "1985-12-01" },
     ]
     array2 [
       { name: "apple", birth: "2000-01-01", age: 19 },
       { name: "banana", birth: "1990-10-01", age: 29 },
       { name: "watermelon", birth: "1985-12-01", age: 33 },
     ]
*/
let result11 = [
      { name: "apple", birth: "2000-01-01" },
      { name: "banana", birth: "1990-10-01" },
      { name: "watermelon", birth: "1985-12-01" }
].map((value) => {
      let minutes = 1000 * 60;
      let hours = minutes * 60;
      let days = hours * 24;
      let years = days * 365;
      let birthday = new Date(value.birth).getTime();
      let dateNow = new Date().getTime();
      let differenceDate = dateNow - birthday;
      let convertYear = differenceDate / years;
      value.age = Math.floor(convertYear);
      return value;
     
});
console.log(result11);

