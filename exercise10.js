/*
แบบฝึกหัด 6.6  Slide 100
 1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

  let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()

*/

//error ต้องใส่ ; เวลาจบคำสั่ง
let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
  (user.go)()
  