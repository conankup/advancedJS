/*
แบบฝึกหัด 6.6  Slide 101
 2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา
  function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?


*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); 
//ได้ค่า undefined

  