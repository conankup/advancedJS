/*
แบบฝึกหัด 6.6  Slide 103
 4.ให้ Object ชื่อ ladder มี
	method ขึ้น และ ลง

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up().up().down().showStep(); // 1

*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};




  