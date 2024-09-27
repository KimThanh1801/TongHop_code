// /*Mảng trong JavaScript  - Array
// 1. Tạo mảng
//     - Cách tạo
//     - Sử dụng cách nào? Tại sao?
//     - Kiểm tra data type?
// 2. Truy xuất mảng
//     - Độ dài mảng
//     - Lấy phần tử theo index

//  */
// // có thể chứa tất cả các dữ liệu trong javaScript
// //Cách 1
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'JavaScript',
//     null, 
//     undefined,
//     function(){},
//     {},
//     123
// ]
// console.log(languages)
// //Cách2: Thực thi chậm hơn so với cách 1 còn kết quả thfi không có sự thay đổi 
// var languages = new Array (
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'JavaScript',
//     null, 
//     undefined,
//     function(){},
//     {},
//     123
// )
// console.log(languages)

// //- Kiểm tra data type?
// console.log(typeof languages)
// // kiểu dữ liệu của object là {} console.log(typeof {})
// console.log(Array.isArray({}))
// // TRong trường hợp này không thể dùng typeof để kiểm tra vì cả hai đều tra về object vif thế nên dùng cách này để kiểm tra true ỏr false

// // 2. Truy xuất mảng
// //     - Độ dài mảng
// var languages = new Array (
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'JavaScript',
//     null, 
//     undefined,
//     function(){},
//     {},
//     123
// )
// console.log(languages.length) //8
// //     - Lấy phần tử theo index
// console.log(languages[0]);//JavaScript

var languages = [
    'ho',
    'thi',
    'kim'
]

console.log(languages.slice(1,2));