const products = [
    { id: 1, name: "Office Chair 909B", price: 12000, image: "office-chair_909B.jpg" },
    { id: 2, name: "Office Chair A05", price: 7500, image: "office-chair_A05.jpg" },
    { id: 3, name: "Nesting Table 1", price: 3300, image: "nesting-1.jpg" },
    { id: 4, name: "Nesting Table 2", price: 6720, image: "nesting-2.jpg" }
];

function displayProducts() {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Ksh. ${product.price}</p>
                <div class="quantity-control">
                    <button class="decrease">-</button>
                    <input type="number" value="1" min="1" class="quantity">
                    <button class="increase">+</button>
                </div>
                <button class="atc">Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
