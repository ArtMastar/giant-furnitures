/* ==============================
   1️⃣ PRODUCTS DATA
============================== */

const products = [
    {
        id: 1,
        name: "Office Chair C35",
        price: 12000,
        image: "/products/C35.jpg",
        category: "chairs"
    },
    {
        id: 2,
        name: "Office Chair A05",
        price: 7500,
        image: "/products/1-12.jpg",
        category: "cabinets"
    },
    {
        id: 3,
        name: "Nesting Table Small",
        price: 3300,
        image: "/products/103.jpg",
        category: "tables"
    },
    {
        id: 4,
        name: "Nesting Table Large",
        price: 6720,
        image: "/products/nesting-2.jpg",
        category: "tables"
    }
];


/* ==============================
   2️⃣ RENDER PRODUCTS
============================== */

function renderProducts(filteredProducts = products) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = `product ${product.category}`;

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


/* ==============================
   3️⃣ QUANTITY + CART LOGIC
============================== */

let cartItems = [];

function attachProductEvents() {
    document.querySelectorAll(".product").forEach(product => {

        const decreaseBtn = product.querySelector(".decrease");
        const increaseBtn = product.querySelector(".increase");
        const quantityInput = product.querySelector(".quantity");
        const addToCartBtn = product.querySelector(".atc");

        decreaseBtn.onclick = () => {
            if (quantityInput.value > 1) {
                quantityInput.value--;
            }
        };

        increaseBtn.onclick = () => {
            quantityInput.value++;
        };

        addToCartBtn.onclick = () => {
            const name = product.querySelector("h2").textContent;
            const price = parseInt(
                product.querySelector("p").textContent.replace("Ksh. ", "")
            );
            const quantity = parseInt(quantityInput.value);

            addToCart(name, price, quantity);
        };
    });
}

function addToCart(name, price, quantity) {

    let existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ name, price, quantity });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} (x${item.quantity}) - Ksh. ${item.price * item.quantity}
            <button onclick="removeFromCart(${index})">remove</button>
        `;

        cartList.appendChild(li);
    });

    cartTotal.textContent = `Total: Ksh. ${total}`;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}

function clearCart() {
    cartItems = [];
    updateCartDisplay();
}

function toggleCart() {
    const cart = document.getElementById("cart");
    cart.style.display =
        cart.style.display === "block" ? "none" : "block";
}


/* ==============================
   4️⃣ CATEGORY FILTER
============================== */

function filterProducts(category) {
    if (category === "all") {
        renderProducts(products);
    } else {
        const filtered = products.filter(
            product => product.category === category
        );
        renderProducts(filtered);
    }
}


/* ==============================
   5️⃣ WHATSAPP ORDER
============================== */

function sendOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let phoneNumber = "254745485817";
    let message = "Hello, I would like to place an order:\n\n";

    cartItems.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) - Ksh. ${item.price * item.quantity}\n`;
    });

    let totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    message += `\n*Total Amount: Ksh. ${totalAmount}*`;

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


/* ==============================
   6️⃣ INITIALIZE
============================== */

document.addEventListener("DOMContentLoaded", function () {

    renderProducts();

    document
        .getElementById("category-select")
        .addEventListener("change", function () {
            filterProducts(this.value);
        });
});
