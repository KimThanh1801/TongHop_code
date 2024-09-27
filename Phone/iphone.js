// // Bắt sự kiện khi nhấn vào nút "ADD CART"
// const buttons = document.querySelectorAll("button");
// buttons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         const btn = event.target;
//         const product = btn.parentElement;
//         const productImg = product.querySelector("img").src;
//         const productName = product.querySelector("h1").innerText;
//         const productPrice = product.querySelector("span").innerText;

//         addCart(productPrice, productImg, productName);
//     });
// });

// // Thêm sản phẩm vào giỏ hàng
// function addCart(productPrice, productImg, productName) {
//     const cartItem = document.querySelectorAll("tbody tr");
//     for (let i = 0; i < cartItem.length; i++) {
//         const productNameT = document.querySelectorAll('.productName');
//         if (productNameT[i].innerHTML === productName) {
//             alert("Product is already in the cart");
//             return;
//         }
//     }

//     const newRow = document.createElement("tr");
//     const rowContent = `
//          <tr>
//              <td style="display: flex; align-items: center;">
//                  <img style="width: 70px" src="${productImg}" alt="">
//                  <span class="productName">${productName}</span>
//              </td>
//              <td><p><span class="price">${productPrice}<sup>đ</sup></span></p></td>
//              <td><input type="number" value="1" min="1"></td>
//              <td style="cursor: pointer"><span class="productDelete">Delete</span></td>
//          </tr>
//      `;
//     newRow.innerHTML = rowContent;
//     const CartTbody = document.querySelector("tbody");
//     CartTbody.append(newRow);

//     cartTotal(); // Cập nhật tổng tiền
//     deleteCart(); // Thêm sự kiện xóa cho sản phẩm
//     inputChange()
// }

// // Tính tổng tiền các sản phẩm
// function cartTotal() {
//     const cartItems = document.querySelectorAll("tbody tr");
//     let total = 0;

//     cartItems.forEach(function (item) {
//         const quantity = item.querySelector("input").value;
//         let productPrice = item.querySelector(".price").innerHTML;
//         productPrice = parseFloat(productPrice);

//         const totalPerProduct = quantity * productPrice * 1000;
//         total += totalPerProduct;
//     });

//     const totalFormatted = total.toLocaleString('de-DE');
//     const cartTotalElement = document.querySelector(".price-total span");
//     cartTotalElement.innerHTML = totalFormatted;

//     // inputChange();
// }

// // Xóa sản phẩm khỏi giỏ hàng
// function deleteCart() {
//     const cartItems = document.querySelectorAll("tbody tr");
//     cartItems.forEach(function (item, index) {
//         const deleteButton = item.querySelector(".productDelete");
//         deleteButton.addEventListener("click", function () {
//             item.remove(); // Xóa sản phẩm
//             // cartTotal(); // Cập nhật tổng tiền sau khi xóa
//         });
//     });
// }

// // Them so luong vvao gio hang
// function inputChange() {
//     const cartItems = document.querySelectorAll("tbody tr");
//     for(var i = 0; i<cartItems.length; i++){
//         var inputChange = document.getElementById("input");
//         inputChange.addEventListener("change", function()){
//             cartTotal();
//         }
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////
// Bắt sự kiện khi nhấn vào nút "ADD CART"

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        const btn = event.target; // lay gia tri chinh xac khi click vvao
        const product = btn.parentElement;
        const productImg = product.querySelector("img").src;
        const productName = product.querySelector("h1").innerText;
        const productPrice = product.querySelector("span").innerText;

        addCart(productPrice, productImg, productName);
    });
}

// Thêm sản phẩm vào giỏ hàng
function addCart(productPrice, productImg, productName) {
    const cartItems = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItems.length; i++) {
        const productNameT = document.querySelectorAll('.productName');
        if (productNameT[i].innerHTML === productName) {
            alert("Product is already in the cart");
            return;
        }
    }

    const newRow = document.createElement("tr");
    const rowContent = `
         <tr>
             <td style="display: flex; align-items: center;">
                 <img style="width: 70px" src="${productImg}" alt="">
                 <span class="productName">${productName}</span>
             </td>
             <td><p><span class="price">${productPrice}<sup>đ</sup></span></p></td>
             <td><input class="quantityInput" type="number" value="1" min="1"></td>
             <td style="cursor: pointer"><span class="productDelete">Delete</span></td>
         </tr>
     `;
    newRow.innerHTML = rowContent;
    const CartTbody = document.querySelector("tbody");
    CartTbody.append(newRow);

    cartTotal(); // Cập nhật tổng tiền
    deleteCart(); // Thêm sự kiện xóa cho sản phẩm
    inputChange(); // Cập nhật sự thay đổi số lượng
}

// Tính tổng tiền các sản phẩm
function cartTotal() {
    const cartItems = document.querySelectorAll("tbody tr");
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const quantity = cartItems[i].querySelector(".quantityInput").value;
        let productPrice = cartItems[i].querySelector(".price").innerHTML;
        productPrice = parseFloat(productPrice);

        const totalPerProduct = quantity * productPrice * 1000;
        total += totalPerProduct;
    }

    const totalFormatted = total.toLocaleString('de-DE');
    const cartTotalElement = document.querySelector(".price-total span");
    cartTotalElement.innerHTML = totalFormatted;
}

// Xóa sản phẩm khỏi giỏ hàng
function deleteCart() {
    const cartItems = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItems.length; i++) {
        const deleteButton = cartItems[i].querySelector(".productDelete");
        deleteButton.addEventListener("click", function () {
            cartItems[i].remove(); // Xóa sản phẩm
            cartTotal(); // Cập nhật tổng tiền sau khi xóa
        });
    }
}

// Cập nhật số lượng sản phẩm
function inputChange() {
    const quantityInputs = document.querySelectorAll(".quantityInput");
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", function () {
            
        });
    }
}
//////////////////////////////////////////////////////////////
// Bắt sự kiện khi nhấn vào nút "ADD CART"


