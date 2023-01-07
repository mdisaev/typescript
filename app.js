"use strict";
function shiftCipher(str, shift = 1) {
    let arr = str.split('').map(char => char.charCodeAt(0)).filter(word => word > 96 && word < 123);
    arr.forEach((element, index) => {
        let r = Math.round(shift / 26) * 26;
        let x = shift - r;
        arr[index] = element + x;
        if (arr[index] > 122) {
            arr[index] = arr[index] - 26;
        }
    });
    return arr.map(char => String.fromCharCode(char)).join('');
}
console.log(shiftCipher("abc"));
console.log(shiftCipher("abz", 27));
console.log(shiftCipher("abz", 1000));
function shiftDecipher(str, shift = 1) {
    let arr = str.split('').map(char => char.charCodeAt(0)).filter(word => word > 96 && word < 123);
    arr.forEach((element, index) => {
        let r = Math.round(shift / 26) * 26;
        let x = shift - r;
        arr[index] = element - x;
        if (arr[index] < 97) {
            arr[index] = arr[index] + 26;
        }
    });
    return arr.map(char => String.fromCharCode(char)).join('');
}
console.log(shiftDecipher("bcd"));
console.log(shiftDecipher("bca", 27));
console.log(shiftDecipher("mnl", 1000));
//# sourceMappingURL=app.js.map