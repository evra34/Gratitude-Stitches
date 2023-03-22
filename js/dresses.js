// let openCart  = document.querySelector(".cartimg")
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
let firstOpenCart = document.querySelector('.cartimg1')

// openCart.addEventListener('click', function carts(){
//     cart.classList.add('active')
// })

firstOpenCart.addEventListener('click', function carts(){
    cart.classList.add('active')
})

closeCart.addEventListener('click', function carts(){
    cart.classList.remove('active')
})



if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}
else{
    ready();
}


function ready(){
    // Remove Items from cart
    var ReomveCartButtons = document.getElementsByClassName("cart-remove")
    console.log(ReomveCartButtons)
    for(var i = 0; i< ReomveCartButtons.length; i++){
        var button = ReomveCartButtons[i]
        button.addEventListener("click", removeCartItem);
    }
   // QUANTITY CHANGES CREATING
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for(var i = 0; i< quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantitychanged)
    }
    //ADD  TO  CART
    var addCart = document.getElementsByClassName("add-cart")
    for(var i = 0; i< addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    // BUY BUTTON WORK 
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}
// BUY BUTTON
function buyButtonClicked(){
    // alert('Your order has been placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal()
}


function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

 // QUANTITY CHANGES 
 function quantitychanged (event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    // CALLING THE UPDATE TOTAL FUNCTION AGAIN
    updateTotal()
 }
 // ADD TO CART
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    var price = shopProducts.getElementsByClassName("price")[0].innerText
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src
    addProductToCart(title, price, productImg);
    updateTotal()
} 
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for ( var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("You have alredy added this Item to cart");
            return;
        }  
    }
    var cartBoxContent = `
                        <img src="${productImg}" class="cart-img" alt="" width="90%">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <img class='cart-remove class='bx bxs-trash cart-remove' src="img/icons/trash_24px.png" alt="" width="20px">`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantitychanged)
}


// UPDATE TOTAL
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0]
    var cartBoxes = cartContent.getElementsByClassName("cart-box")
    var total = 0;
    for( var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("₦", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity);
    }
        // IF PRICE CONTAIN SOME DECIMAL VALUE
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "₦" + total;
    
}





const primaryNav = document.getElementById('nav')
const navToggle = document.querySelector('.mobile-nav-bar-toggle')

navToggle.addEventListener('click' , () =>{
    // primaryNav.style.transform = 'translateX(0)';
    let visibility = primaryNav.getAttribute('data-visible')
    let navIconsToggle = navToggle.getAttribute('aria-expanded')
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

const header = document.querySelector('header')
const sectionOne = document.querySelector('.ankaraimg')

const sectionOneOptions = { 
    rootMargin: "-450px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('header-scrolled')
        } else{
            header.classList.remove('header-scrolled')
        }
    })
}
, sectionOneOptions)

sectionOneObserver.observe(sectionOne)