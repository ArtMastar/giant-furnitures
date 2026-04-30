/* ==============================
   1️⃣ PRODUCTS DATA
============================== */

const products = [
    {
        id: 1,
        name: "NovaView Glass Display Cabinet",
        price: 19500,
        image: "/products/1-08.jpg",
        category: "storage",
        keywords: ["glass","cabinet","display","storage","office","shelves","files","books","lockable","modern","furniture","archive","documents","cupboard","organizer","corporate","interior","workspace","professional","secure"]
    },
    {
        id: 2,
        name: "PrimeGuard Steel Storage Cabinet",
        price: 20500,
        image: "/products/1-09.jpg",
        category: "storage",
        keywords: ["metal","steel","cabinet","storage","locker","lockable","office","industrial","secure","documents","files","heavy","durable","organization","commercial","cupboard","archive","safety","furniture","institutional"]
    },
    {
        id: 3,
        name: "EliteArchive Glass Door Cabinet",
        price: 20400,
        image: "/products/1-10.jpg",
        category: "storage",
        keywords: ["glass","cabinet","office","archive","display","storage","files","documents","modern","lockable","corporate","shelves","books","cupboard","interior","workspace","professional","secure","furniture","minimalist"]
    },
    {
        id: 4,
        name: "ClearLine Office Display Cabinet",
        price: 19500,
        image: "/products/1-11.jpg",
        category: "storage",
        keywords: ["cabinet","office","storage","books","files","display","glass","modern","shelves","workspace","organization","professional","cupboard","corporate","archive","interior","minimal","secure","furniture","clean"]
    },
    {
        id: 5,
        name: "ExecutiveHub Multi-Storage Cabinet",
        price: 22000,
        image: "/products/1-13.jpg",
        category: "storage",
        keywords: ["executive","cabinet","storage","office","files","books","lockable","corporate","modern","organization","cupboard","archive","professional","furniture","interior","workspace","secure","efficient","design","functional"]
    },
    {
        id: 6,
        name: "CornerPro Utility Cabinet",
        price: 21000,
        image: "/products/1-12.jpg",
        category: "storage",
        keywords: ["corner","cabinet","storage","office","space","compact","organization","cupboard","files","documents","modern","secure","workspace","minimal","furniture","archive","professional","utility","efficient","design"]
    },
    {
        id: 7,
        name: "SafeFile 4-Drawer Cabinet",
        price: 17400,
        image: "/products/6-4D.jpg",
        category: "storage",
        keywords: ["drawer","filing","cabinet","office","storage","documents","files","vertical","lockable","archive","secure","corporate","organization","professional","workspace","furniture","durable","efficient","commercial","modern"]
    },
    {
        id: 8,
        name: "Prestige Executive Desk",
        price: 23500,
        images: [
            "/products/103.jpg",
            "/products/103-BROWN.jpg"
        ],
        category: "tables",
        keywords: ["executive","desk","brown","wooden","office","luxury","manager","corporate","professional","workspace","table","premium","leadership","furniture","durable","surface","drawers","classic","design","interior"]
    },
    {
        id: 9,
        name: "ComfortLine Visitor Chair",
        price: 8500,
        image: "/products/851.jpg",
        category: "chairs",
        keywords: ["visitor","chair","office","guest","reception","meeting","comfortable","corporate","seating","professional","modern","conference","durable","workspace","furniture","support","design","interior","waiting","armrest"]
    },
    {
        id: 10,
        name: "UrbanEdge Office Desk",
        price: 22800,
        image: "/products/1205.jpg",
        category: "tables",
        keywords: ["desk","office","modern","workspace","executive","table","corporate","professional","surface","durable","furniture","minimal","design","wooden","manager","workstation","interior","functional","premium","sleek"]
    },
    {
        id: 11,
        name: "Axis Executive Desk",
        price: 49500/53000,
        image: "/products/3016-3018.jpg",
        category: "tables",
        keywords: ["executive","desk","office","workstation","manager","corporate","professional","table","luxury","workspace","furniture","modern","surface","durable","premium","design","leadership","interior","wooden","sleek"]
    },
    {
        id: 12,
        name: "PowerPro Office Workstation",
        price: 27300,
        images: [
            "/products/4212-4214.jpg"
        ],
        category: "desks",
        keywords: ["workstation","desk","office","corporate","computer","workspace","storage","drawers","professional","modern","furniture","surface","manager","executive","durable","functional","design","interior","organization","table"]
    },
    {
        id: 13,
        name: "Summit L-Shape Executive Desk",
        price: 37500,
        image: "/products/9316_9318.jpg",
        category: "desks",
        keywords: ["lshape","desk","executive","corner","office","workstation","manager","corporate","professional","workspace","modern","furniture","surface","premium","design","functional","interior","wooden","sleek","efficient"]
    },
    {
        id: 14,
        name: "FlexMesh Executive Chair",
        price: 5000,
        images: [
            "/products/FS4005.jpg",
            "/products/FS4005-1.jpg"
        ],
        category: "chairs",
        keywords: ["mesh","executive","chair","office","ergonomic","adjustable","support","comfortable","corporate","swivel","highback","professional","workspace","furniture","modern","durable","posture","armrest","premium","design"]
    },
    {
        id: 15,
        name: "SpineSupport Ergonomic Chair",
        price: 8500,
        image: "/products/FS5003.jpg",
        category: "chairs",
        keywords: ["ergonomic","chair","office","highback","headrest","adjustable","support","posture","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","executive","armrest","premium","design"]
    },
    {
        id: 16,
        name: "ClassicPro Office Desk",
        price: 18000/19000,
        image: "/products/j012_14.jpeg",
        category: "tables",
        keywords: ["desk","office","wooden","drawers","workspace","executive","manager","corporate","professional","table","surface","furniture","classic","design","durable","modern","interior","functional","organization","sleek"]
    },
    {
        id: 17,
        name: "AeroFlex Executive Chair",
        price: 21000,
        image: "/products/J098A.jpg",
        category: "tables",
        keywords: ["executive","chair","office","ergonomic","adjustable","mesh","support","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","posture","armrest","premium","design","productivity"]
    },
    {
        id: 18,
        name: "VisitorPro Arm Chair",
        price: 6800,
        image: "/products/j166-1c.jpg",
        category: "tables",
        keywords: ["visitor","chair","office","guest","reception","meeting","armrest","corporate","professional","seating","modern","conference","durable","workspace","furniture","support","design","interior","waiting","comfortable"]
    },
    {
        id: 19,
        name: "SafeFile 3-Drawer Cabinet",
        price: 15500,
        image: "/products/6-3D.jpg",
        category: "storage"
    },
    {
        id: 20,
        name: "SecureMax Tall Storage Cabinet",
        price: 18500,
        images: [
            "/products/1-15.jpg",
            "/products/1-15.jpeg"
        ],
        category: "storage",
        keywords: ["tall","cabinet","storage","office","locker","lockable","files","documents","archive","secure","corporate","furniture","cupboard","professional","organization","modern","workspace","durable","industrial","safety"]
    },
    {
        id: 22,
        name: "UltraComfort Executive Chair",
        price: 12300,
        image: "/products/C35.jpg",
        category: "chairs",
        keywords: ["executive","chair","office","highback","ergonomic","comfortable","manager","corporate","seating","professional","support","adjustable","luxury","furniture","workspace","durable","armrest","swivel","premium","design"]
    },
    {
        id: 23,
        name: "FlexGuest Mesh Chair",
        price: 5900,
        image: "/products/fs4019.jpg",
        category: "chairs",
        keywords: ["mesh","chair","visitor","guest","office","conference","reception","seating","breathable","modern","corporate","professional","support","durable","workspace","design","armrest","meeting","furniture","comfortable"]
    },
    {
        id: 24,
        name: "AeroMesh Cantilever Chair",
        price: 6200,
        image: "/products/1902.jpg",
        category: "tables",
        keywords: ["mesh","chair","visitor","cantilever","office","conference","guest","breathable","seating","modern","corporate","professional","support","durable","meeting","workspace","design","armrest","reception","furniture"]
    },
    {
        id: 25,
        name: "ErgoMax Pro Chair",
        price: 16600,
        image: "/products/FS840A.jpg",
        category: "tables",
        keywords: ["ergonomic","chair","office","adjustable","mesh","support","comfortable","corporate","professional","swivel","highback","workspace","furniture","modern","durable","posture","design","executive","armrest","productivity"]
    },
    {
        id: 26,
        name: "Zenith Ergonomic Chair",
        price: 11300,
        image: "/products/ys-277.jpg",
        category: "tables",
        keywords: ["ergonomic","chair","office","adjustable","support","posture","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","mesh","armrest","executive","design","productivity","highback"]
    },
    {
        id: 27,
        name: "TitanSteel Double Door Cabinet",
        price: 22000,
        image: "/products/1-27.jpg",
        category: "storage",
        keywords: ["steel","cabinet","metal","storage","office","industrial","secure","locker","documents","files","heavy","durable","archive","lockable","corporate","organization","cupboard","commercial","safety","professional"]
    },
    {
        id: 28,
        name: "WorkLite Study Desk",
        price: 13500,
        image: "/products/12.jpg",
        category: "tables",
        keywords: ["desk","office","study","table","workspace","modern","compact","minimal","workstation","homeoffice","furniture","professional","surface","durable","corporate","interior","design","functional","wooden","sleek"]
    },
    {
        id: 29,
        name: "CompactPro Office Desk",
        price: 15200,
        images: [
            "/products/101.jpg",
            "/products/101.jpeg"
        ],
        category: "tables",
        keywords: ["desk","office","workstation","table","drawers","storage","workspace","modern","corporate","professional","furniture","wooden","surface","organization","durable","executive","minimal","design","functional","interior"]
    },
    {
        id: 30,
        name: "RegalFront Executive Desk",
        price: 22000/24500,
        image: "/products/5514-12.jpg",
        category: "tables",
        keywords: ["executive","desk","luxury","office","premium","manager","corporate","professional","workspace","table","wooden","leadership","modern","surface","furniture","design","interior","durable","sleek","authority"]
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
            <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Ksh. ${product.price}</p>

            <div class="quantity-control">
                <button class="decrease">-</button>
                <input type="number" value="1" min="1" class="quantity">
                <button class="increase">+</button>
            </div>

            <button class="atc">Add to Cart</button>
        `;

        card.addEventListener("click", (e) => {

    if (
        !e.target.classList.contains("atc") &&
        !e.target.classList.contains("increase") &&
        !e.target.classList.contains("decrease") &&
        !e.target.classList.contains("quantity")
    ) {
        openModal(product);
    }
});

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
   4️⃣ CATEGORY FILTER AND SEARCH
================================= */

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

function levenshtein(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function searchProducts(keyword) {
    keyword = keyword.toLowerCase().trim();

    const results = products.map(product => {

        let score = 0;

        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();
        const keywords = product.keywords || [];

        // 1️⃣ Exact name match (highest priority)
        if (name.includes(keyword)) score += 50;

        // 2️⃣ Category match
        if (category.includes(keyword)) score += 30;

        // 3️⃣ Keyword array match
        keywords.forEach(k => {
            if (k.toLowerCase().includes(keyword)) score += 40;

            // Fuzzy matching
            if (levenshtein(k.toLowerCase(), keyword) <= 2) {
                score += 25;
            }
        });

        // 4️⃣ Partial word matching
        const words = name.split(" ");
        words.forEach(word => {
            if (word.startsWith(keyword)) score += 20;
        });

        return { product, score };
    });

    // Remove weak matches
    const filtered = results
        .filter(item => item.score > 10)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);

    renderProducts(filtered);
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

    document
        .getElementById("search-input")
        .addEventListener("input", function () {
            searchProducts(this.value);
        });

});

const cartIcon = document.querySelector(".cart-icon");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

/* ======================
   DESKTOP (MOUSE)
====================== */

cartIcon.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - cartIcon.getBoundingClientRect().left;
    offsetY = e.clientY - cartIcon.getBoundingClientRect().top;
    cartIcon.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    cartIcon.style.left = `${e.clientX - offsetX}px`;
    cartIcon.style.top = `${e.clientY - offsetY}px`;

    cartIcon.style.right = "auto";
    cartIcon.style.bottom = "auto";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


/* ======================
   MOBILE (TOUCH)
====================== */

cartIcon.addEventListener("touchstart", (e) => {
    isDragging = true;

    const touch = e.touches[0];

    offsetX = touch.clientX - cartIcon.getBoundingClientRect().left;
    offsetY = touch.clientY - cartIcon.getBoundingClientRect().top;

    cartIcon.style.transition = "none";
});

document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];

    cartIcon.style.left = `${touch.clientX - offsetX}px`;
    cartIcon.style.top = `${touch.clientY - offsetY}px`;

    cartIcon.style.right = "auto";
    cartIcon.style.bottom = "auto";
});

document.addEventListener("touchend", () => {
    isDragging = false;
});

const modal = document.getElementById("productModal");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.querySelector(".close");

function openModal(product) {

    modal.style.display = "flex";

    modalName.textContent = product.name;
    modalPrice.textContent = `Ksh. ${product.price}`;

    const imagesArray = product.images ? product.images : [product.image];

    modalMainImage.src = imagesArray[0];

    modalThumbnails.innerHTML = "";

    imagesArray.forEach(img => {
        const thumb = document.createElement("img");
        thumb.src = img;

        thumb.addEventListener("click", () => {
            modalMainImage.src = img;
        });

        modalThumbnails.appendChild(thumb);
    });
}

closeModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

const filter = document.querySelector(".filter");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        filter.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    } else {
        filter.style.boxShadow = "none";
    }
});

const categoryButtons = document.querySelectorAll(".category-icons button");

categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Remove active from all
        categoryButtons.forEach(b => b.classList.remove("active"));

        // Add active to clicked
        btn.classList.add("active");

        const category = btn.dataset.category;

        if (category === "all") {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
        }
    });
});

const categoryIcons = document.getElementById("categoryIcons");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

leftBtn.addEventListener("click", () => {
    categoryIcons.scrollBy({
        left: -200,
        behavior: "smooth"
    });
});

rightBtn.addEventListener("click", () => {
    categoryIcons.scrollBy({
        left: 200,
        behavior: "smooth"
    });
});