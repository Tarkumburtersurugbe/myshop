let cart = 0;

 
document.getElementById("shopPage").style.display="block";

 

function addCart(){

cart++;

document.getElementById("cartCount").innerText = cart;
alert("add to cart");
 

}
const orderbtn =document.getElementById("order-btn");
orderbtn.addEventListener("click",() =>{
    if (cart.length===0){
        alert("your cart is empty");
    } else{
        alert("order placed successful!");
         
    }
})