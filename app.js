"use strict";
// for(let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i))
// }
// let a = 10;
// console.log(`a = ${a}`)
//variables
// let hello = "world"; 
// const vasya = "Vasya";
// const b = 10;
// let c: string; 
// c = "10"; 
// function getRandomNumber(min: number, max: number): number {
// return Math.floor(min + Math.random() * (max - min + 1));
// }
//HW #30
function shiftCipher(str, shift = 1) {
    let b = str.split('');
    let c = b.map(char => char.charCodeAt(0));
    let d = c.filter(word => word > 96 && word < 123);
    d.forEach((element, index) => {
        let r = Math.round(shift / 26);
        let e = r * 26;
        let x = shift - e;
        console.log("x=", x);
        d[index] = element + x;
        if (d[index] > 122) {
            d[index] = d[index] - 26;
        }
        console.log(d);
    });
    let t = d.map(char => String.fromCharCode(char));
    return console.log(t);
}
shiftCipher("abc");
//for each a-z change ASCII code shift to shift z > a 
// arr.forEach((element, index) => {
//     arr[index] = element + 10;
//   });
//122 
//    let asciiKeys = [];
//    for (var i = 0; i < d.length; i ++)
//      asciiKeys.push(d[i].fromCharCode(0));///
// let e = d.toString();
//    let t =  e.split('')
//    console.log(String.fromCharCode());
//  d.forEach((element, index) => {
//     if (element < 122) {
//     d[index] = element + shift; 
//     }
//     if (element == 122) {
//         d[index] = element - 25 + shift;
//     }
//    });
//# sourceMappingURL=app.js.map