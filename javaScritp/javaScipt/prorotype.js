
function User (firstName, lastName, avatar){
    this.firstName= firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    
    this.getName = function(){
        return `${this.firstName}${this.lastName}`;
    }
    }
  
//thêm thuộc tinh đúng
User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}

var user = new User('Thanh','Ho','https://i.pinimg.com/474x/71/d8/9b/71d89b86c1d7f58f526e9001b9b96d0e.jpg')
var user2 = new User('Thanhhh','Hooo','https://i.pinimg.com/474x/71/d8/9b/71d89b86c1d7f58f526e9001b9b96d0e.jpg')


console.log(user.className)
console.log(user.getClassName())


