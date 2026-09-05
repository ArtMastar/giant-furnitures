/* ==============================
   1️⃣ PRODUCTS DATA
============================== */

const products = [
    {
        id: 1,
        name: "NovaView Glass Display Cabinet",
        price: 19500,
        images: [
            "/products/cabinets/1-08.webp",
            "/products/cabinets/1-08(2).webp",
            "/products/cabinets/1-08(1).jpg"
        ],
        category: "storage",
        keywords: ["glass","cabinet","1-08","display","storage","office","shelves","files","books","lockable","modern","furniture","archive","documents","cupboard","organizer","corporate","interior","workspace","professional","secure"]
    },
    {
        id: 2,
        name: "PrimeGuard Steel Storage Cabinet",
        price: 20500,
        images: [
            "/products/cabinets/1-09.webp",
            "/products/cabinets/1-09(1).jpg"
        ],
        category: "storage",
        keywords: ["metal","steel","cabinet","1-09","storage","locker","lockable","office","industrial","secure","documents","files","heavy","durable","organization","commercial","cupboard","archive","safety","furniture","institutional"]
    },
    {
        id: 3,
        name: "EliteArchive Glass Door Cabinet",
        price: 20400,
        images: [
            "/products/cabinets/1-10.webp",
            "/products/cabinets/1-10(1).jpg"
        ],
        category: "storage",
        keywords: ["glass","cabinet","1-10","archive","display","storage","files","documents","modern","lockable","corporate","shelves","books","cupboard","interior","workspace","professional","secure","furniture","minimalist"]
    },
    {
        id: 4,
        name: "ClearLine Office Display Cabinet",
        price: 19500,
        images: [
            "/products/cabinets/1-11.webp",
            "/products/cabinets/1-11(1).jpg"
        ],
        category: "storage",
        keywords: ["cabinet","office","1-11","storage","books","files","display","glass","modern","shelves","workspace","organization","professional","cupboard","corporate","archive","interior","minimal","secure","furniture","clean"]
    },
    {
        id: 5,
        name: "ExecutiveHub Multi-Storage Cabinet",
        price: 22000,
        images: [
            "/products/cabinets/1-13.webp",
            "/products/cabinets/1-13(1).jpg"
        ],
        category: "storage",
        keywords: ["executive","cabinet","1-13","storage","office","files","books","lockable","corporate","modern","organization","cupboard","archive","professional","furniture","interior","workspace","secure","efficient","design","functional"]
    },
    {
        id: 6,
        name: "CornerPro Utility Cabinet",
        price: 21000,
        images: [
            "/products/cabinets/1-12.webp",
            "/products/cabinets/1-12(2).webp",
            "/products/cabinets/1-12(1).jpg"
        ],
        category: "storage",
        keywords: ["corner","cabinet","1-12","storage","office","space","compact","organization","cupboard","files","documents","modern","secure","workspace","minimal","furniture","archive","professional","utility","efficient","design"]
    },
    {
        id: 8,
        name: "Prestige Executive Desk",
        price: 23500,
        images: [
            "/products/desks/103.webp",
            "/products/103-BROWN.jpg"
        ],
        category: "desks",
        keywords: ["executive","desk","103","brown","wooden","office","luxury","manager","corporate","professional","workspace","table","premium","leadership","furniture","durable","surface","drawers","classic","design","interior"]
    },
    {
        id: 9,
        name: "ComfortLine Visitor Chair",
        price: 8500,
        images: [
            "/products/chairs/851(1).webp",
            "/products/chairs/851.jpg"
        ],
        category: "chairs",
        keywords: ["visitor","chair","851","office","guest","reception","meeting","comfortable","corporate","seating","professional","modern","conference","durable","workspace","furniture","support","design","interior","waiting","armrest"]
    },
    {
        id: 10,
        name: "UrbanEdge Office Desk",
        price: 22800,
        image: "/products/desks/1205.webp",
        category: "desks",
        keywords: ["desk","1205","office","modern","workspace","executive","table","corporate","professional","surface","durable","furniture","minimal","design","wooden","manager","workstation","interior","functional","premium","sleek"]
    },
    {
        id: 11,
        name: "Axis Executive Desk",
        price: 49500,
        image: "/products/desks/3016-3018.webp",
        category: "desks",
        keywords: ["executive","desk","3018","office","workstation","manager","corporate","professional","table","luxury","workspace","furniture","modern","surface","durable","premium","design","leadership","interior","wooden","sleek"]
    },
    {
        id: 12,
        name: "PowerPro Office Workstation",
        price: 27300,
        images: [
            "/products/desks/4212-4214.webp"
        ],
        category: "desks",
        keywords: ["workstation","desk","4212","office","corporate","computer","workspace","storage","drawers","professional","modern","furniture","surface","manager","executive","durable","functional","design","interior","organization","table"]
    },
    {
        id: 13,
        name: "Summit L-Shape Executive Desk",
        price: 37500,
        image: "/products/desks/9316_18.webp",
        category: "desks",
        keywords: ["lshape","desk","9316","executive","corner","office","workstation","manager","corporate","professional","workspace","modern","furniture","surface","premium","design","functional","interior","wooden","sleek","efficient"]
    },
    {
        id: 14,
        name: "FlexMesh Executive Chair",
        price: 5000,
        images: [
            "/products/chairs/fs4005(1).webp",
            "/products/chairs/fs4005oa.webp",
            "/products/chairs/FS4005.webp"
        ],
        category: "chairs",
        keywords: ["mesh","executive","FS4005","chair","office","ergonomic","adjustable","support","comfortable","corporate","swivel","highback","professional","workspace","furniture","modern","durable","posture","armrest","premium","design"]
    },
    {
        id: 15,
        name: "SpineSupport Ergonomic Chair",
        price: 8500,
        images: [
            "/products/chairs/fs5003(1).webp",
            "/products/chairs/FS5003.webp"
        ],
        category: "chairs",
        keywords: ["ergonomic","chair","FS5003","office","highback","headrest","adjustable","support","posture","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","executive","armrest","premium","design"]
    },
    {
        id: 16,
        name: "ClassicPro Office Desk",
        price: 18000,
        image: "/products/desks/j012_14.webp",
        category: "desks",
        keywords: ["desk","office","J012","wooden","drawers","workspace","executive","manager","corporate","professional","table","surface","furniture","classic","design","durable","modern","interior","functional","organization","sleek"]
    },
    {
        id: 17,
        name: "AeroFlex Executive Chair",
        price: 21000,
        images: [
            "/products/chairs/J098A.webp",
            "/products/chairs/J098A.webp"
        ],
        category: "chairs",
        keywords: ["executive","chair","J098A","office","ergonomic","adjustable","mesh","support","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","posture","armrest","premium","design","productivity"]
    },
    {
        id: 18,
        name: "VisitorPro Arm Chair",
        price: 6800,
        images: [
            "/products/chairs/j166-1c(1).webp",
            "/products/chairs/j166-1c.webp"
        ],
        category: "chairs",
        keywords: ["visitor","chair","J166-1C","office","guest","reception","meeting","armrest","corporate","professional","seating","modern","conference","durable","workspace","furniture","support","design","interior","waiting","comfortable"]
    },
    {
        id: 19,
        name: "SafeFile 3-Drawer Cabinet",
        price: 15500,
        images: [
            "/products/cabinets/6-3D.webp",
            "/products/cabinets/6-3D(1).webp"
        ],
        category: "storage",
        keywords: ["corner","cabinet","6-3D","storage","office","space","compact","organization","cupboard","files","documents","modern","secure","workspace","minimal","furniture","archive","professional","utility","efficient","design"]
    },
    {
        id: 20,
        name: "SecureMax Tall Storage Cabinet",
        price: 18500,
        images: [
            "/products/cabinets/1-15.webp",
            "/products/cabinets/1-15(2).webp",
            "/products/cabinets/1-15(1).webp"
        ],
        category: "storage",
        keywords: ["tall","cabinet","1-15","storage","office","locker","lockable","files","documents","archive","secure","corporate","furniture","cupboard","professional","organization","modern","workspace","durable","industrial","safety"]
    },
    {
        id: 21,
        name: "CornerPro Utility Cabinet",
        price: 21000,
        images: [
            "/products/cabinets/1-12(2).webp",
            "/products/cabinets/1-12.webp"
        ],
        category: "storage",
        keywords: ["corner","cabinet","1-12","storage","office","space","compact","organization","cupboard","files","documents","modern","secure","workspace","minimal","furniture","archive","professional","utility","efficient","design"]
    },
    {
        id: 22,
        name: "UltraComfort Executive Chair",
        price: 12300,
        images: [
            "/products/chairs/C35.webp",
            "/products/chairs/C35-8800.webp"
        ],
        category: "chairs",
        keywords: ["executive","chair","C35","office","highback","ergonomic","comfortable","manager","corporate","seating","professional","support","adjustable","luxury","furniture","workspace","durable","armrest","swivel","premium","design"]
    },
    {
        id: 23,
        name: "FlexGuest Mesh Chair",
        price: 5900,
        images: [
            "/products/chairs/fs4019(1).webp",
            "/products/chairs/fs4019.webp"
        ],
        category: "chairs",
        keywords: ["mesh","chair","FS4019","visitor","guest","office","conference","reception","seating","breathable","modern","corporate","professional","support","durable","workspace","design","armrest","meeting","furniture","comfortable"]
    },
    {
        id: 24,
        name: "AeroMesh Cantilever Chair",
        price: 6200,
        images: [
            "/products/chairs/1902(1).webp",
            "/products/chairs/1902.webp"
        ],
        category: "chairs",
        keywords: ["mesh","chair","1902","visitor","cantilever","office","conference","guest","breathable","seating","modern","corporate","professional","support","durable","meeting","workspace","design","armrest","reception","furniture"]
    },
    {
        id: 25,
        name: "ErgoMax Pro Chair",
        price: 16600,
        images: [
            "/products/chairs/FS840A(2).webp",
            "/products/chairs/FS840A.webp",
            "/products/chairs/FS840A(1).webp"
        ],
        category: "chairs",
        keywords: ["ergonomic","chair","FS840A","office","adjustable","mesh","support","comfortable","corporate","professional","swivel","highback","workspace","furniture","modern","durable","posture","design","executive","armrest","productivity"]
    },
    {
        id: 26,
        name: "Zenith Ergonomic Chair",
        price: 11300,
        images: [
            "/products/chairs/ys-277(1).webp",
            "/products/chairs/ys-277.webp",
            "/products/chairs/ys-277oa.webp"
        ],
        category: "chairs",
        keywords: ["ergonomic","chair","YS-277","office","adjustable","support","posture","comfortable","corporate","swivel","professional","workspace","furniture","modern","durable","mesh","armrest","executive","design","productivity","highback"]
    },
    {
        id: 27,
        name: "TitanSteel Double Door Cabinet",
        price: 22000,
        images: [
            "/products/cabinets/1-27-1.webp",
            "/products/cabinets/1-27(1).webp",
            "/products/cabinets/1-27.webp"
        ],
        category: "storage",
        keywords: ["steel","cabinet","1-27","metal","storage","office","industrial","secure","locker","documents","files","heavy","durable","archive","lockable","corporate","organization","cupboard","commercial","safety","professional"]
    },
    {
        id: 28,
        name: "WorkLite Study Desk",
        price: 13500,
        images: [
            "/products/desks/12.webp",
            "/products/desks/12.webp"
        ],
        category: "desks",
        keywords: ["desk","office","12","study","table","workspace","modern","compact","minimal","workstation","homeoffice","furniture","professional","surface","durable","corporate","interior","design","functional","wooden","sleek"]
    },
    {
        id: 29,
        name: "CompactPro Office Desk",
        price: 15200,
        images: [
            "/products/desks/101.webp",
            "/products/desks/101(1.2M).webp"
        ],
        category: "desks",
        keywords: ["desk","office","101","workstation","table","drawers","storage","workspace","modern","corporate","professional","furniture","wooden","surface","organization","durable","executive","minimal","design","functional","interior"]
    },
    {
        id: 30,
        name: "RegalFront Executive Desk",
        price: 22000,
        image: "/products/desks/5514-12.webp",
        category: "desks",
        keywords: ["executive","desk","5512","luxury","office","premium","manager","corporate","professional","workspace","table","wooden","leadership","modern","surface","furniture","design","interior","durable","sleek","authority"]
    },
    {
        id: 31,
        name: "1-18 Storage Cabinet",
        price: 20500,
        image: "/products/cabinets/1-18.webp",
        category: "storage",
        keywords: ["metal","steel","cabinet","1-18","storage","locker","lockable","office","industrial","secure","documents","files","heavy","durable","organization","commercial","cupboard","archive","safety","furniture","institutional"]
    },
    {
        id: 32,
        name: "SafeFile 4-Drawer Cabinet",
        price: 17400,
        image: "/products/cabinets/6-4D.webp",
        category: "storage",
        keywords: ["drawer","filing","cabinet","6-4D","office","storage","documents","files","vertical","lockable","archive","secure","corporate","organization","professional","workspace","furniture","durable","efficient","commercial","modern"]
    },
    {
        id: 33,
        name: "Locker 4-Drawer Cabinet",
        price: 17400,
        image: "/products/cabinets/6-4D-1.webp",
        category: "storage",
        keywords: ["drawer","filing","cabinet","6-4D-1","office","storage","documents","files","vertical","lockable","archive","secure","corporate","organization","professional","workspace","furniture","durable","efficient","commercial","modern"]
    },
    {
        id: 34,
        name: "09-12 Cabinet",
        price: 17400,
        image: "/products/cabinets/09-12.webp",
        category: "storage",
        keywords: ["drawer","filing","cabinet","09-12","office","storage","documents","files","vertical","lockable","archive","secure","corporate","organization","professional","workspace","furniture","durable","efficient","commercial","modern"]
    },
    {
        id: 35,
        name: "12 Office Desk",
        price: 17400,
        image: "/products/desks/12.webp",
        category: "storage",
        keywords: ["drawer","filing","cabinet","12","office","storage","documents","files","vertical","lockable","archive","secure","corporate","organization","professional","workspace","furniture","durable","efficient","commercial","modern"]
    },
    {
        id: 37,
        name: "Salon Styling Chair",
        price: '18500',
        images: [
            "products/chairs/57A(1).webp",
            "/products/chairs/57A.webp"
        ],
        category: "chairs",
        "description": "A professional salon styling chair with a cushioned seat and durable construction, suitable for salons, barber shops, beauty studios, and commercial workstations.",
        "keywords": ["salon chair", "styling chair","57A", "barber chair", "beauty salon", "black", "commercial", "professional", "upholstered", "modern", "durable", "workspace", "hair salon", "chair", "furniture", "compact", "comfortable", "studio", "reception", "salon furniture", "stylist"]
    },
    {
        id: 38,
        name: "Conference Chairs",
        price: '3500',
        images: [
            "products/chairs/201B(1).webp",
            "/products/chairs/201B.webp"
        ],
        category: "chairs",
        "description": "A durable molded plastic chair available in multiple vibrant colors, ideal for waiting areas, schools, cafeterias, event spaces, and public seating.",
        "keywords": ["plastic chair","201B", "waiting chair", "visitor chair", "school chair", "cafeteria", "event seating", "multicolor", "polypropylene", "durable", "lightweight", "modern", "commercial", "stackable", "office", "public seating", "chair", "furniture", "reception", "waiting room", "classroom"]
    },
    {
        id: 39,
        name: "Chrome Visitor Office Chair",
        price: '4400',
        images: [
            "/products/chairs/803.webp",
            "/products/chairs/803.webp"
        ],
        category: "chairs",
        "description": "A stylish visitor chair featuring a chrome steel frame with a padded seat and backrest, perfect for conference rooms, offices, and reception areas.",
        "keywords": ["visitor chair", "office chair","803", "chrome", "steel frame", "conference chair", "guest chair", "waiting room", "black", "professional", "commercial", "office furniture", "meeting room", "durable", "comfortable", "modern", "corporate", "workspace", "chair", "reception", "visitor seating"]
    },
    {
        id: 40,
        name: "Mesh Visitor Conference Chair",
        price: '7200',
        images: [
            "/products/chairs/805W(1).webp",
            "/products/chairs/805W.webp"
        ],
        category: "chairs",
        "description": "A modern mesh visitor chair with breathable back support and a sturdy metal frame, designed for offices, conference rooms, and meeting spaces.",
        "keywords": ["mesh chair", "visitor chair","805W", "conference chair", "office chair", "breathable", "ergonomic", "black", "meeting room", "office", "commercial", "professional", "workspace", "durable", "steel frame", "comfortable", "modern", "chair", "guest chair", "reception", "corporate"]
    },
    {
        id: 41,
        name: "Executive Ergonomic Office Chair",
        price: '28500',
        images: [
            "/products/chairs/1024(1).webp",
            "/products/chairs/1024.webp"
        ],
        category: "chairs",
        "description": "A premium executive office chair with ergonomic lumbar support, adjustable height, and thick cushioning for superior comfort throughout the workday.",
        "keywords": ["executive chair", "office chair","1024", "ergonomic", "high back", "blue", "adjustable", "swivel", "lumbar support", "manager", "professional", "corporate", "workspace", "premium", "comfortable", "office furniture", "modern", "chair", "computer chair", "home office", "luxury"]
    },
    {
        id: 42,
        name: "Executive Mesh Office Chair",
        price: '14600',
        images: [
            "/products/chairs/2903(1).webp",
            "/products/chairs/2903.webp"
        ],
        category: "chairs",
        "description": "A breathable mesh executive office chair with ergonomic back support and adjustable features, ideal for long working hours in modern offices.",
        "keywords": ["mesh office chair", "executive chair","2903", "ergonomic", "office chair", "black", "adjustable", "swivel", "lumbar support", "breathable", "professional", "manager", "workspace", "computer chair", "modern", "office furniture", "comfortable", "corporate", "chair", "premium", "home office"]
  },
    {
        id: 43,
        name: "Mesh Visitor Office Chair",
        price: '7300',
        images: [
            "/products/chairs/4019(1).webp",
            "/products/chairs/4019.webp"
        ],
        category: "chairs",
        "description": "A comfortable mesh visitor chair with a durable steel frame, suitable for reception areas, conference rooms, and office guest seating.",
        "keywords": ["visitor chair", "mesh chair","4019", "office chair", "conference", "guest chair", "black", "steel frame", "meeting room", "professional", "office furniture", "commercial", "comfortable", "workspace", "modern", "durable", "reception", "chair", "corporate", "visitor seating", "ergonomic"]
    },
    {
        id: 44,
        name: "Brown Executive Office Chair",
        price: '27000',
        images: [
            "/products/chairs/A106(2).webp",
            "/products/chairs/A106(1).webp"
        ],
        category: "chairs",
        "description": "A luxurious executive office chair upholstered in premium brown material with ergonomic support, adjustable height, and superior cushioning.",
        "keywords": ["executive chair", "brown office chair","A106", "luxury", "office chair", "ergonomic", "high back", "adjustable", "swivel", "manager", "professional", "corporate", "workspace", "comfortable", "premium", "office furniture", "chair", "durable", "modern", "executive office", "brown"]
    },
    {
        id: 45,
        name: "High-Back Executive Chair",
        price: '45600',
        images: [
            "/products/chairs/A8003-1(1).webp",
            "/products/chairs/A8003-1.webp"
        ],
        category: "chairs",
        "description": "A premium high-back executive chair designed with thick cushioning, ergonomic lumbar support, and adjustable functionality for executive workspaces.",
        "keywords": ["high back chair", "executive chair", "office chair","A8003", "ergonomic", "black", "adjustable", "swivel", "luxury", "manager", "professional", "workspace", "office furniture", "comfortable", "corporate", "premium", "chair", "modern", "durable", "computer chair", "executive office"]
    },
    {
        id: 46,
        name: "Luxury Executive Leather Chair",
        price: '18200',
        images: [
            "/products/chairs/B19(1).webp",
            "/products/chairs/B19.webp"
        ],
        category: "chairs",
        "description": "A luxury executive office chair featuring premium leather upholstery, thick padding, ergonomic support, and smooth mobility for professional offices.",
        "keywords": ["leather office chair","B19", "executive chair", "luxury", "office chair", "black", "high back", "ergonomic", "adjustable", "swivel", "manager", "corporate", "workspace", "premium", "comfortable", "office furniture", "chair", "professional", "modern", "durable", "executive office"]
    },
    {
        id: 47,
        name: "Executive Visitor Office Chair",
        price: '8400',
        images: [
            "/products/chairs/820(1).webp",
            "/products/chairs/820.webp"
        ],
        category: "chairs",
        "description": "A premium executive visitor chair featuring a padded seat and backrest with a durable cantilever frame. Designed for reception areas, meeting rooms, executive offices, and boardrooms.",
        "keywords": ["visitor chair", "executive chair","820", "cantilever chair", "office chair", "meeting room", "conference chair", "black", "upholstered", "steel frame", "professional", "corporate", "comfortable", "office furniture", "reception", "guest chair", "modern", "durable", "workspace", "premium", "commercial"]
    },
    {
        id: 48,
        name: "Luxury Reclining Executive Chair",
        price: '8800',
        images: [
            "/products/chairs/886(1).webp",
            "/products/chairs/886.webp"
        ],
        category: "chairs",
        "description": "A luxurious reclining executive office chair with thick cushioning, ergonomic support, padded armrests, and adjustable height for maximum workplace comfort.",
        "keywords": ["executive chair","886", "reclining chair", "office chair", "ergonomic", "high back", "black", "luxury", "manager", "adjustable", "swivel", "premium", "comfortable", "corporate", "workspace", "office furniture", "professional", "durable", "modern", "chair", "executive office"]
    },
    {
        id: 49,
        name: "Executive Leather Office Chair",
        price: '12800',
        images: [
            "/products/chairs/985(1).webp",
            "/products/chairs/985.webp"
        ],
        category: "chairs",
        "description": "A premium leather executive office chair with ergonomic back support, padded armrests, and adjustable height, suitable for executive offices and professional workspaces.",
        "keywords": ["executive chair","985", "leather office chair", "office chair", "ergonomic", "high back", "black", "adjustable", "swivel", "luxury", "manager", "professional", "corporate", "workspace", "comfortable", "office furniture", "premium", "modern", "chair", "durable", "executive office"]
    },
    {
        id: 50,
        name: "Executive Cantilever Meeting Chair",
        price: '12000',
        images: [
            "/products/chairs/8086(1).webp",
            "/products/chairs/8086.webp"
        ],
        category: "chairs",
        "description": "A modern executive cantilever chair with a high-back design and padded upholstery, offering exceptional comfort for boardrooms, offices, and conference rooms.",
        "keywords": ["cantilever chair","8086", "visitor chair", "executive chair", "meeting chair", "conference chair", "office chair", "black", "high back", "steel frame", "comfortable", "professional", "workspace", "office furniture", "modern", "durable", "guest chair", "corporate", "premium", "chair", "boardroom"]
    },
    {
        id: 51,
        name: "Mesh Training Conference Chair",
        price: '13500',
        images: [
            "/products/chairs/9011(1).webp",
            "/products/chairs/9011.webp"
        ],
        category: "chairs",
        "description": "A lightweight conference and training chair with a breathable mesh back, comfortable padded seat, and durable construction for offices, classrooms, and seminar rooms.",
        "keywords": ["training chair","9011", "conference chair", "mesh chair", "office chair", "visitor chair", "black", "breathable", "meeting room", "seminar", "classroom", "commercial", "comfortable", "professional", "office furniture", "durable", "modern", "workspace", "chair", "education", "institution"]
    },
    {
        id: 52,
        name: "Three-Seater Upholstered Waiting Bench",
        price: '27000',
        images: [
            "/products/chairs/A88(1).webp",
            "/products/chairs/A88.webp"
        ],
        category: "chairs",
        "description": "A contemporary three-seater upholstered waiting bench designed for reception areas, hospitals, schools, and commercial waiting spaces. Offers durability with modern styling.",
        "keywords": ["waiting bench","A88", "three seater", "visitor seating", "green", "upholstered", "office", "reception", "hospital", "school", "commercial", "waiting room", "steel frame", "modern", "durable", "public seating", "office furniture", "bench", "chair", "professional", "guest seating"]
    },
    {
        id: 53,
        name: "Three-Seater Airport Waiting Bench",
        price: '--',
        images: [
            "/products/chairs/A89(1).webp",
            "/products/chairs/A89.webp"
        ],
        category: "chairs",
        "description": "A heavy-duty three-seater airport-style waiting bench with durable steel construction, designed for hospitals, airports, offices, and institutional waiting areas.",
        "keywords": ["airport bench","A89", "waiting bench", "three seater", "visitor seating", "steel bench", "grey", "hospital", "office", "commercial", "public seating", "durable", "waiting room", "modern", "office furniture", "reception", "bench", "chair", "institution", "professional", "guest seating"]
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

            const img = product.querySelector("img");

            // 🔥 Trigger animation
            flyToCart(img);

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

        const sorted = [...products].sort((a, b) => a.price - b.price);
        renderProducts(sorted);

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

function flyToCart(imgElement) {
    const cart = document.querySelector(".cart-icon");

    const imgRect = imgElement.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const flyingImg = imgElement.cloneNode(true);

    flyingImg.style.position = "fixed";
    flyingImg.style.left = `${imgRect.left}px`;
    flyingImg.style.top = `${imgRect.top}px`;
    flyingImg.style.width = `${imgRect.width}px`;
    flyingImg.style.height = `${imgRect.height}px`;
    flyingImg.style.transition = "all 0.8s ease-in-out";
    flyingImg.style.zIndex = "3000";
    flyingImg.style.borderRadius = "10px";

    document.body.appendChild(flyingImg);

    // Trigger movement
    setTimeout(() => {
        flyingImg.style.left = `${cartRect.left}px`;
        flyingImg.style.top = `${cartRect.top}px`;
        flyingImg.style.width = "30px";
        flyingImg.style.height = "30px";
        flyingImg.style.opacity = "0.5";
    }, 10);

    // Remove after animation
    setTimeout(() => {
        flyingImg.remove();
    }, 800);

    setTimeout(() => {
        cart.classList.add("bump");
        setTimeout(() => cart.classList.remove("bump"), 300);
    }, 700);
}