const products = [
    { id: 1, name: 'Sản phẩm A', price: 100 },
    { id: 2, name: 'Sản phẩm B', price: 200 },
    { id: 3, name: 'Sản phẩm C', price: 300 }
  ];
  
  // Tìm sản phẩm có id là 2
  //Cách 1
//   const productToFind = 2;
//   const findProduct = products.find(function(product){
//     product === productToFind;
//   });
  
// Cách 2
const productToFind = 2; 
const findProduct = products.find(product => product.id === productToFind);

  console.log(productToFind);
  // Kết quả: { id: 2, name: 'Sản phẩm B', price: 200 }

if (findProduct){
    console.log(`San pham da duoc tim thay: ${findProduct.name}`);
}
else{
    console.log( 'San pham khong tim thay')
}