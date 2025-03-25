let cart = [];

function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartSection = document.getElementById("cart-items");

    if (cartItems.length === 0) {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItems.forEach(id => {
            cartSection.innerHTML += <p>Product ID: ${id}</p>;
        });
    }
});