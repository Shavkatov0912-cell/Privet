const data = {
    tech: [
        { name: "iPhone 16", price: "$999", img: "iphone.jpg" },
        { name: "iPad Pro", price: "$1099", img: "ipad.jpg" }
    ],
    accessories: [
        { name: "Чехол", price: "$49", img: "case.jpg" },
        { name: "Зарядка", price: "$29", img: "charger.jpg" }
    ]
};

function showSection(section) {
    const main = document.getElementById('content');
    main.innerHTML = '<div class="grid"></div>';
    const grid = main.querySelector('.grid');
    
    data[section].forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.img}" width="100">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
                <button onclick="addToCart()">Купить</button>
            </div>
        `;
    });
}

function addToCart() {
    let count = parseInt(document.getElementById('cart-count').innerText);
    document.getElementById('cart-count').innerText = count + 1;
}

// Загружаем технику по умолчанию
showSection('tech');
