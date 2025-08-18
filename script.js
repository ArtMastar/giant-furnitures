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
    const cart = document.querySelector(".cart-items");
    const cartIcon = document.querySelector(".cart-icon");
    const addToCartButtons = document.querySelectorAll(".atc");
    cartList.innerHTML = ""; // Clear current list
    let total = 0;
    const floatingEffect = document.createElement("div");
            floatingEffect.classList.add("floating-effect");
            floatingEffect.textContent = "Added!";
            document.body.appendChild(floatingEffect);

            const buttonRect = event.target.getBoundingClientRect();
            floatingEffect.style.left = `${buttonRect.left + window.scrollX}px`;
            floatingEffect.style.top = `${buttonRect.top + window.scrollY}px`;

            // Animate towards cart
            setTimeout(() => {
                floatingEffect.style.transform = `translate(${cartIcon.offsetLeft - buttonRect.left}px, ${cartIcon.offsetTop - buttonRect.top}px) scale(0.3)`;
                floatingEffect.style.opacity = "0";
            }, 50);

            // Remove after animation
            setTimeout(() => {
                floatingEffect.remove();
            }, 800);

    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;
        let li = document.createElement("li");
        li.innerHTML = `${item.name} (x${item.quantity}) - Ksh. ${item.price * item.quantity} 
                        <button class="cart-cta" onclick="removeFromCart(${index})">remove</button>`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `Total: Ksh. ${total}`;
}

function addToCart(name, price, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value) || 1;

    let existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ name, price, quantity: quantity });
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

function sendOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Add items before placing an order.");
        return;
    }

    let phoneNumber = "254745485817"; // Replace with your WhatsApp number (without '+' sign)
    let message = "Hello, I would like to place an order:\n\n";
    
    cartItems.forEach(item => {
        message += `- ${item.name}   (x${item.quantity})   - Ksh. ${item.price * item.quantity}\n`;
    });

    let totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*Total Amount: Ksh. ${totalAmount}*`;

    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
}

// Function to update order count
function updateOrderCount() {
    let orderCount = localStorage.getItem("orderCount") || 0;
    orderCount++;
    localStorage.setItem("orderCount", orderCount);
    document.getElementById("orderCount").textContent = orderCount;
}

// Call this function when "Place Order on WhatsApp" is clicked
document.getElementById("placeOrderBtn").addEventListener("click", updateOrderCount);

// Display stored order count on page load
document.addEventListener("DOMContentLoaded", function () {
    let orderCount = localStorage.getItem("orderCount") || 0;
    document.getElementById("orderCount").textContent = orderCount;
});
