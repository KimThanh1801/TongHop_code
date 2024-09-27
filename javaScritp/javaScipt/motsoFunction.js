function Message() {
    function Message2() {
        console.log('Message2');
    }
    // Message2();
}
Message()

/*
    Các loại function 

    1. Declaration function
    2. Expression function
    3. Arrow function 
    
    */
showMessage()
/*Có khi gọi nó trước khi định nghĩa */
/*1.  Declaration function*/
function showMessage() {
    console.log(' Declaration function ')
}
showMessage()
/*2. Expression function: gán cho một biến 
Toán tử  gán 
Có thể đặt tên cho nó hoặc không*/
/*Cách 1 */
showMessage2();
/*Không thể khi gọi nó trước khi định nghĩa */
var showMessage2 = function () {
    console.log(' Expression function')
}

showMessage2()
// /*Cách 2 */
// setTimeout(function autoLogin(){

// });
// /*Cách 3 */
// var myObject = {
//     myFunction: function (){

//     }
// }