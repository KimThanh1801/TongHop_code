

// Math object

// -Math.PI
// -Math.round() : làm tròn số
// -Math.abs() : giá trị tuyệt đối 
// -Math.ceil() : làm tronf trên ví dụ 4.00001 làm tròn = 5 hiểu cứ ;ên một đơn vị nó sẽ làm tròn trên số đó 
// -Math.floor(): làm tròn dưới ví dụ 4.9999999 làm tròn thành 4
// -Math.random(): trả về một dãy số nhỏ hơn 1 và(cho các số ngẫu nhiên) 
// Ví dụ:
var random = Math.floor(Math.random ()* 5)

// var bonus =[
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]

if ( random < 5){
    console.log('Cuong hoa thanh cong');
}
console.log(bonus[random]);
// -Math.min(): trả về số nhỏ nhất trong dãy số
// Ví  dụ
console.log(Math.min(-100,1,90,50,40)) // -100
// -Math.max()
console.log(Math.max(-100,1,90,50,40))//90


