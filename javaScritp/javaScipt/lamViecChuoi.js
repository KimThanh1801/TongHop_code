/*Làm viêcj với chuỗi */
var myString = 'Hoc JS tại F8!'

// // 1. Length
console.log(myString.length);//14
// // 2. Find index
console.log(myString.indexOf('JS')); //4
// 3. Cut String
console.log(myString.slice(4,6)) // JS
//4. Replace
alert(myString.replace('JS','Javascript')); // Hoc Javascript tại F8!
//----------TRường hợp có nhiều JS giống nhau----------
// var myString ='Hoc JS tai JS JS f8!'
alert(myString.replace(/JS/g,'Javascript')); // Hoc Javascript tại Javascript Javascript F8!
//5. Convert to upper case: chuyển đổi tất cả thành chữ hoa
console.log(myString.toUpperCase);
//6. Convert to lower case: chuyển đổi tất cả thành chữ thường 
console.log(myString.toLowerCase);
//7. Trim: Loại bỏ các khoảng cách 
console.log(myString.trim()); 
//8. Split: dựa vào điểm chung để cắt thành array
// ví dụ: 
// var myString ='JavaScript, PHP, Python';
console.log(myString.split(', '))
// 9. Get a character by index: lấy được một kí tự cho trước
const myString2 = 'Kim Thanh';
//Cách 1:
console.log(myString2.charAt(0)); // K
console.log(myString2.charAt(0)); // không có cái gì vì 9 kí tự 
//Cách 2:
console.log(myString2[0]); // K
console.log(myString2[10]); // undefine
