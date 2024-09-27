// // map(): Dùng để tạo một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc.
// const numbers = [1, 2, 3, 4, 5];
// // const doubled = numbers.map(num => num * 2);
// //=>cách viết gọn của một hàm và có một số đặc điểm giúp code ngắn gọn, dễ đọc hơn. 
// //là cách viết tắt của 
// doubled = numbers.map(function(num) {
//   return num * 2;
// })
// console.log(doubled); // Kết quả: [2, 4, 6, 8, 10]

/////////////////////////////////////////////////////
// const lengthArr = [1, 4, 3, 6];
// let areaArr = [];
// for(let i=0; i < lengthArr.length; i++) {
//    areaArr.push(lengthArr[i] * lengthArr[i]);
// }
// console.log(areaArr);//[1, 16, 9, 36]
///////////////////////////
const lengthArr = [1, 4, 3, 6];
//Cach 1
// let areaArr = lengthArr.map(length => length * length);
// Cach 2
let areaArr = lengthArr.map(function(areaArr1){
    return areaArr1 * areaArr1;
})
console.log(areaArr);//[1, 16, 9, 36]



//   const productToFind = 2;
//   const findProduct = products.find(function(product){
//     product === productToFind;
//   });


// const productToFind = 2; 
// const findProduct = products.find(product => product.id === productToFind);

//   console.log(productToFind);
  // Kết quả: { id: 2, name: 'Sản phẩm B', price: 200 }
