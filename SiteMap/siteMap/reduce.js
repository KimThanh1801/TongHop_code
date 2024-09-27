// khi muốn nhận về môt giá trị duy nhất sau khi thực hiện
// tính toán và xử lí các phân phần tử trên trên Array

var cousers = [
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

//Thực hiện tính toán
//Cách 1:
//Dễ hiểu  hơn
var totalCoin = 0;
for (var couser in cousers) {
    totalCoin += cousers[couser].coin; // Truy cập đúng đối tượng và thuộc tính
}
console.log(totalCoin);

//Cách 2