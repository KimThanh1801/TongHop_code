// Kiểu số
/* 1. Tạo gía trị Number
    - Các cách tạo
    -Dùng khi nào? Tại sao?
    - Kiểm tra data type

2. Làm việc với Number
    - To String
    - To fixed
*/
//1. Tạo gía trị Number
//- Các cách tạo
//Cách 1: 
var age = 18;
var PI = 3.14;
// Cách 2:
var otherNumber = new Number(9);
console.log(typeof otherNumber);// object
// Tránh sử dụng từ khóa new
// Đêm lại hiểu quả không mong muốn khi kiểm tra th0if nó lại cho kết quả là object
// Ví dụ:
var result = 20 / 'ABC';
console.log(result); // NaN: kết quả không hợp lệ
console.log(isNaN(result)); // true

//2. Làm việc với Number
var age = 18;
var PI = 3.14;
// - To String
var myString = PI.toString() ;
console.log(typeof myString); // String
console.log( myString); // 3.14
// - To fixed
console.log(PI.toFixed()); // = 3 làm tròn số
