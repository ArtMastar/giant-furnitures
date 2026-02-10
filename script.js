const products = [
    {
        id: 1,
        name: "Office Chair C35",
        price: 12000,
        image: "/products/C35.jpg"
    },
    {
        id: 2,
        name: "Office Chair A05",
        price: 7500,
        image: "/products/A05.jpg"
    },
    {
        id: 3,
        name: "Nesting Table Small",
        price: 3300,
        image: "/products/nesting-1.jpg"
    },
    {
        id: 4,
        name: "Nesting Table Large",
        price: 6720,
        image: "/products/nesting-2.jpg"
    }
];

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

function addToCart(name, price) {
    // 1. Check if the product already exists in cartItems
    let existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        // 2. If it exists, increase its quantity by 1
        existingItem.quantity++;
    } else {
        // 3. If it does not exist, push a new object with:
        //    - name (string)
        //    - price (number)
        //    - quantity (default 1)
        cartItems.push({ name, price, quantity: 1 });
    }

    // 4. After adding/updating, refresh the cart display
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

// Example product data (you can link to your real data or extract from image names)
const products = [
  { name: "Office Chair", description: "Ergonomic chair for long working hours.", price: "$120", image: "chair.jpg" },
  { name: "Office Desk", description: "Spacious wooden desk.", price: "$250", image: "desk.jpg" }
];

// Attach event listeners to product elements
document.querySelectorAll(".product").forEach((productEl, index) => {
  productEl.addEventListener("click", () => {
    let product = products[index]; // get product details
    
    // Fill modal content
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalName").textContent = product.name;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalPrice").textContent = product.price;
    
    // Show modal
    document.getElementById("productModal").style.display = "flex";
  });
});

// Close modal when "x" clicked
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("productModal").style.display = "none";
});

// Close when clicking outside modal box
window.addEventListener("click", (e) => {
  if (e.target.id === "productModal") {
    document.getElementById("productModal").style.display = "none";
  }
});

function renderProducts() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Ksh. ${product.price}</p>

            <div class="quantity-control">
                <button class="decrease">-</button>
                <input type="number" value="1" min="1" class="quantity">
                <button class="increase">+</button>
            </div>

            <button class="atc">Add to Cart</button>
        `;

        grid.appendChild(card);
    });

    attachProductEvents();
}

