document.getElementById("category-select").addEventListener("change", function() {
    let category = this.value;
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Handle quantity increase and decrease
    document.querySelectorAll(".product").forEach(product => {
        const decreaseBtn = product.querySelector(".decrease");
        const increaseBtn = product.querySelector(".increase");
        const quantityInput = product.querySelector(".quantity");
        const addToCartBtn = product.querySelector(".atc");

        decreaseBtn.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });

        increaseBtn.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
        });

        addToCartBtn.addEventListener("click", function () {
            const productName = product.querySelector("h2").textContent;
            const price = product.querySelector("p").textContent;
            const quantity = quantityInput.value;

            console.log(`Added to cart: ${productName} | ${price} | Quantity: ${quantity}`);
        });
    });
});

let cartItems = [];

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = ""; // Clear current list
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `${item.name} (x${item.quantity}) - Ksh. ${item.price * item.quantity} 
                        <button onclick="removeFromCart(${index})">remove</button>`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `Total: Ksh. ${total}`;
}

function addToCart(name, price) {
    let existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}

function clearCart() {
    cartItems = [];
    updateCartDisplay();
}

// Toggle cart visibility
function toggleCart() {
    const cart = document.getElementById("cart");
    cart.style.display = cart.style.display === "block" ? "none" : "block";
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll(".atc").forEach((button, index) => {
    button.addEventListener("click", () => {
        let product = button.parentElement;
        let name = product.querySelector("h2").textContent;
        let price = parseInt(product.querySelector("p").textContent.replace("Ksh. ", ""));
        addToCart(name, price);
    });
});
