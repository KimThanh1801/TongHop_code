/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi 
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash(\)
3. Xem độ dài chuỗi 
4. Chú ý độ dài khi viết code 
5. Template string ES6
*/

/*1. Tạo chuỗi 
    - Các cách tạo chuỗi */
/*Cách 1 */
var fullName = 'Kim Thanh';
console.log(fullName)
/*Cách 2 */
var fullName = new String('Kim Thanh');
console.log(typeof fullName)
/*Nên dùng cách 1 hơn.
Lý do: 
+ Cách 2 dài dòng hơn  
+Cách 1 nhanh hơn cách 2
+ Kiểu dữ liệu cho ra các nhà sanga lập không muốn => nó cho ra kết ra là object không phải String như mình muốn (khó hiểu )
*/

/*2. Một số case sử dụng backslash(\) */
var fullName = 'Hồ Thị \"Kim Thanh\"'; 
alert(fullName);
/*3. Xem độ dài chuỗi  */
var fullName = 'Kim Thanh';
alert(fullName.length);
/*4. Chú ý độ dài khi viết code  */
var fullName = "Một số case sử dụng backslash"
+"Một số case sử dụng backslash"
alert(fullName);
/*5. Template string ES6 */
var firstName = 'Kim';
var lastName ='Thanh';
alert(`Toi la: ${firstName} ${lastName}`);