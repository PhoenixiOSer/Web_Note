window.addEventListener("load", function() {
    var cartBtn = document.querySelector("#J_miniCartTrigger");
    console.log(cartBtn);
    cartBtn.addEventListener('mouseenter', function() {
        cartBtn.className += " topbar-cart-active";
    });
    cartBtn.addEventListener('mouseleave', function() {
        cartBtn.classList.remove("topbar-cart-active");
    });
})