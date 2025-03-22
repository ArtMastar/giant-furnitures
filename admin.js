document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Default admin credentials (change this later to use a database)
    const adminUser = "admin";
    const adminPass = "admin123";

    if (username === adminUser && password === adminPass) {
        localStorage.setItem("isAdminLoggedIn", "true");
        window.location.href = "admin-dashboard.html"; // Redirect to dashboard
    } else {
        errorMessage.textContent = "Incorrect username or password!";
    }
});

// Check if admin is logged in
if (localStorage.getItem("isAdminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
}

// Logout button functionality
document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "admin-login.html";
});

// Add product functionality
document.getElementById("product-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    let imageFile = document.getElementById("product-image").files[0];
    
    if (!imageFile) return alert("Please upload an image.");
    
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    
    reader.onload = function() {
        let product = {
            name: name,
            price: price,
            image: reader.result
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));

        displayProducts();
        document.getElementById("product-form").reset();
    };
});

// Function to display products
function displayProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("product-container");
    container.innerHTML = "";

    products.forEach((product, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${product.image}" width="50">
            <span>${product.name} - Ksh. ${product.price}</span>
            <button onclick="deleteProduct(${index})">Remove</button>
        `;
        container.appendChild(li);
    });
}

// Function to remove product
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

// Load products when page opens
window.onload = displayProducts;
