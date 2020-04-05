/*
4.18.  จงเขียนฟังก์ชัน multiplyNumeric(obj, times)
โดยถ้า properties นั้นมี value เป็น number 
ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่น
ไม่ต้องทำอะไร
    before the call
    let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };


    multiplyNumeric(menu, 2);

    after the call
    menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

*/
// before the call
function multiplyNumeric(obj, times){
    for (let key in obj){
        if (typeof obj[key] !== "number") continue
        obj[key] *= times
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };