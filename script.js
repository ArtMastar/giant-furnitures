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
            alert(`${productName} added to cart!`);
        });
    });
});
