const products = [
  {
    "name": "",
    "price": 26500,
    "description": "",
    "image": "products/1-12.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/1-13.jpg"
  },
  {
    "name": "Four Drawer Cabinet",
    "price": 23500,
    "description": "",
    "image": "/products/6-4d.jpg"
  },
  {
    "name": "",
    "price": 27500,
    "description": "",
    "image": "/products/103.jpg"
  },{
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/618.jpg"
  },
  {
    "name": "Three Drawer Cabinet",
    "price": 18500,
    "description": "",
    "image": "/products/6-3D.jpg"
  },
  {
    "name": "Executive Visitor Chair",
    "price": 13000,
    "description": "",
    "image": "/products/851.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/909C.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/911A.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/1205.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/3016-3018.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/4212-4214.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/8068.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/8086.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/8320.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/9318-9316.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/A88.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/B19.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/909C.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/C35.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/F226-1.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS701.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS898.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS948.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS4005.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS4009.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FS4003.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/FT718.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/H014B.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/Q03.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/Q03P.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/QJ803-1.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/XHF-022.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/XHF-803.jpg"
  },
  {
    "name": "",
    "price": 28000,
    "description": "",
    "image": "/products/XR5114B.jpg"
  }
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
