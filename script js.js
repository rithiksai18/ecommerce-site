Js  

document.addEventListener("DOMContentLoaded", function () {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            let productsContainer = document.getElementById("products");
            data.forEach(product => {
                let productHTML = `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>₹${product.price}</p>
                        <button onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                productsContainer.innerHTML += productHTML;
            });
        });
});

function addToCart(productId) {
    alert("Product added to cart: " + productId);
}