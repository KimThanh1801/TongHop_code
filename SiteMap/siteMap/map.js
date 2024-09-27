var couser = [
    {
        id: 1, 
        name: 'HTML',
        coin:1
    },
    {
        id: 2, 
        name: 'HTML',
        coin:1
    },
    {
        id: 3, 
        name: 'HTML',
        coin:1
    },
    {
        id: 4, 
        name: 'HTML',
        coin:1
    },
    {
        id: 5, 
        name: 'HTML',
        coin:1
    },
    {
        id: 6, 
        name: 'HTML',
        coin:2
    },
];

function cousersHandler (couser,index,originArray ){
    // console.log(cousers);
    return {
        id: couser.id,
        name: `Khoa hoc  ${couser.name}`,
        coin: couser.coin,
        index:index,
        originArray: originArray
    };
}
var newCourse = couser.map(cousersHandler);
console.log(newCourse);
// sẽ ra 6 nhưng tất cả đều là undefined
//hiểu theo cách dễ là mảng mới này nó sẽ trả về kết quả y chan mảng cũ( function cousersHandler (){console.log(cousers);
//Nêu mảng undefined thì nó cũng y vậy hoặc 

// neu ta khong truyen du lieu vafo thi se thong bao loi
//map: sẽ duyệt qua từng phần tử của mảng này
//Mỗi khi vượt qua các phần tử nào thì nó sẽ co lại tức có nghĩa là gọi lại
//nó sẽ chạy qua lần thứ nhất và lấy element và sẽ gọi ngược lại function mà chúng ta đã truyền vào  