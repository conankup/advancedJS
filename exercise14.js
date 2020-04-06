/*
แบบฝึกหัด 7.4  Slide 118
 1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
read(): รับค่าจาก propmt สองตัว
sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

*/

function Calculator(){
  this.read = function(){
      this.numbar1 = Number(prompt("Enter first number:"))
      this.numbar2 = Number(prompt("Enter second number:"))
  }
  this.sum = function(){
      return this.numbar1 + this.numbar2
  }
  this.mul = function(){
      return this.numbar1 * this.numbar2
  }
}
let calculator = new Calculator();
calculator.read();
// calculator.sum();
//calculator.mul();