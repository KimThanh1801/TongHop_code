// //lay du lieu vao 
// function Searchproduct(){
//     fetch('https://jsonplaceholder.typicode.com/posts')// du lieu co san
//     .then(response => response.json())
//     .then(data => {
//         let product ='';
//         data.map(value => {
//             return product += `<div>${value.id}. ${value.title}</div>`
//         });
//         document.getElementById('products').innerHTML = product;
//     })
//     .catch(error => console.log(error));// bắt lỗi 
// }
// // tạo reaseach để tìm 
// function searchProduct(){
//     // lay gia trị nguoi dung nhap vào ô input
//     let valueSearch = document.getElementById('search').value;
//     // gọi lại hàm fetch để lấy giữ liệu về
//     fetch('https://jsonplaceholder.typicode.com/posts')// du lieu co san
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         // dung ham filter để lọc
//         let productSearch = data.filter(value =>{
//             return value.title.toLowerCase().includes(valueSearch.toLowerCase());// toLowerCase: phan biet chu hoa thuong
//         })
//         //cho in cac san pham duoc research
//         document.getElementById('products').innerHTML = '';
//         // in san pham ra
//         let product ='';
//         productSearch.map(value => {
//             return product += `<div>${value.id}. ${value.title}</div>`
//         });
//         document.getElementById('products').innerHTML = product;
//     })
//     .catch(error => console.log(error));// bắt lỗi 
// }

function Searchproduct() {
    fetch('https://jsonplaceholder.typicode.com/posts')// du lieu co san
    .then(response => response.json())
    .then(data =>{
        let product='';
        data.map(value => {
            return product +=` <div>${value.id}.${value.title}</div>`
        })
        document.getElementById('products').innerHTML=product;
    })
    .catch(error => console.log(error));
}

function searchProduct(){
    let valueSearch = document.getElementById('search').value;
    fetch('https://jsonplaceholder.typicode.com/posts')// du lieu co san
    .then(response => response.json())
    .then(data =>{
        let productSearch = data.filter(value =>{
            return value.title.toLowerCase().includes(valueSearch.toLowerCase());
        })
        document.getElementById('products').innerHTML='';
        let products='';
        productSearch.map(value =>{
            return products += `<div>${value.id}.${value.title}</div>`;
        })
        document.getElementById('products').innerHTML=products;
    })
    .catch(error => console.log(error));
}