/*
Slide AdvancedJS Part2 page 60
2.11.  แบบฝึกหัด
4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าว
จะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย
โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้

*/
function extractCurrencyValue(string, rate) {
    let findDollar = string.indexOf("$");
        dollar = string.slice(1);
        convertTHB = dollar * rate;
        alert(convertTHB);
}

extractCurrencyValue('$120', 30.5);
//console.log(extractCurrencyValue('$120', 30.5));
