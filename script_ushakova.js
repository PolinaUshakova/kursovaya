document.querySelectorAll('.header-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Целевой элемент для прокрутки
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Плавная прокрутка к целевому элементу
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};



const images = [
    'prod1_brown.jpg',
    'prod1_grey.jpg',
    'prod1_blue.jpg',
    'prod1_blue2.jpg'
];

let currentImageIndex = 0;

const productImage = document.getElementById('product-image');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    productImage.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Смена изображения каждые 3 секунды


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesSEA = [
    'prod2_plate.jpg',
    'prod2_plate2.jpg',
    'prod2.jpg',
    'prod2_2.jpg',
    'prod2_down.jpg'
];

let currentImageIndexSEA = 0;

const productImageSEA = document.getElementById('product-imageSEA');

function changeImageSEA() {
    currentImageIndexSEA = (currentImageIndexSEA + 1) % imagesSEA.length;
    productImageSEA.src = imagesSEA[currentImageIndexSEA];
}

setInterval(changeImageSEA, 3000); // Смена изображения каждые 3 секунды


document.querySelectorAll('.add-to-cartSEA').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesCOAST = [
    'prod3_bowlu.jpg',
    'prod3_bowld.jpg'
];

let currentImageIndexCOAST = 0;

const productImageCOAST = document.getElementById('product-imageCOAST');

function changeImageCOAST() {
    currentImageIndexCOAST = (currentImageIndexCOAST + 1) % imagesCOAST.length;
    productImageCOAST.src = imagesCOAST[currentImageIndexCOAST];
}

setInterval(changeImageCOAST, 3000); // Смена изображения каждые 3 секунды


document.querySelectorAll('.add-to-cartCOAST').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesMOSS = [
    'prod4_plate.jpg',
    'prod4_plateu.jpg',
    'prod4_plated.jpg'
];

let currentImageIndexMOSS = 0;

const productImageMOSS = document.getElementById('product-imageMOSS');

function changeImageMOSS() {
    currentImageIndexMOSS = (currentImageIndexMOSS + 1) % imagesMOSS.length;
    productImageMOSS.src = imagesMOSS[currentImageIndexMOSS];
}

setInterval(changeImageMOSS, 3000); // Смена изображения каждые 3 секунды

document.querySelectorAll('.add-to-cartMOSS').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesCHOCH = [
    'prod5_plate.jpg',
    'prod5_plate2.jpg',
    'prod5_5.jpg'
];

let currentImageIndexCHOCH = 0;

const productImageCHOCH = document.getElementById('product-imageCHOCH');

function changeImageCHOCH() {
    currentImageIndexCHOCH = (currentImageIndexCHOCH + 1) % imagesCHOCH.length;
    productImageCHOCH.src = imagesCHOCH[currentImageIndexCHOCH];
}

setInterval(changeImageCHOCH, 3000); // Смена изображения каждые 3 секунды

document.querySelectorAll('.add-to-cartCHOCH').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesBET = [
    'prod6_plate2.jpg',
    'prod6_plate.jpg',
    'prod6_plated.jpg'
];

let currentImageIndexBET = 0;

const productImageBET = document.getElementById('product-imageBET');

function changeImageBET() {
    currentImageIndexBET = (currentImageIndexBET + 1) % imagesBET.length;
    productImageBET.src = imagesBET[currentImageIndexBET];
}

setInterval(changeImageBET, 3000); // Смена изображения каждые 3 секунды

document.querySelectorAll('.add-to-cartBET').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesFUN = [
    'prod8_platesetlb.png',
    'prod8_platesetdot.png',
    'prod8_platesetb.png',
    'prod8_platesetarrow.png',
    'prod8_platesetlbd.png',
    'prod8_platesetw.png',
];

let currentImageIndexFUN = 0;

const productImageFUN = document.getElementById('product-imageFUN');

function changeImageFUN() {
    currentImageIndexFUN = (currentImageIndexFUN + 1) % imagesFUN.length;
    productImageFUN.src = imagesFUN[currentImageIndexFUN];
}

setInterval(changeImageFUN, 3000);

document.querySelectorAll('.add-to-cartFUN').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});



const imagesFLO = [
    'prod7_cup4.jpeg',
    'prod7_cup3.jpeg',
    'prod7_cup2.jpeg'
];

let currentImageIndexFLO = 0;

const productImageFLO = document.getElementById('product-imageFLO');

function changeImageFLO() {
    currentImageIndexFLO = (currentImageIndexFLO + 1) % imagesFLO.length;
    productImageFLO.src = imagesFLO[currentImageIndexFLO];
}

setInterval(changeImageFLO, 3000);


document.querySelectorAll('.add-to-cartFLO').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product-container');
        const productName = productContainer.getAttribute('data-name');
        const productPrice = parseInt(productContainer.getAttribute('data-price'));

        // Добавление товара в корзину
        addProductToCart(productName, productPrice);
    });
});


// Функция для добавления товара в корзину
function addProductToCart(name, price) {
    const cartItems = document.getElementById('cart-items');
    
    //Есть ли уже этот продукт в корзине
    const existingCartItem = [...cartItems.children].find(item => 
        item.querySelector('.product-name').innerText === name
    );

    if (existingCartItem) {
        // Если продукт уже есть, то увеличиваем количество
        const quantityInput = existingCartItem.querySelector('.quantity');
        const totalPriceSpan = existingCartItem.querySelector('.total-price');
        const newQuantity = parseInt(quantityInput.value) + initialQuantity;
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice(price, quantityInput.value, totalPriceSpan);
    } else {
        // Создание нового элемента для корзины
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p class="product-name">${name}</p>
            <div class="quantity-control">
                <button class="decrease">-</button>
                <input type="number" value="1" min="1" class="quantity">
                <button class="increase">+</button>
            </div>
            <p>Итоговая стоимость: <span class="total-price">${price}</span> руб.</p>
        `;
        
        cartItems.appendChild(cartItem);

        //Изменения количества товара
        const quantityInput = cartItem.querySelector('.quantity');
        const totalPriceSpan = cartItem.querySelector('.total-price');

        // Увеличение количества товара
        cartItem.querySelector('.increase').addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotalPrice(price, quantityInput.value, totalPriceSpan);
        });

        // Уменьшение количества товара
        cartItem.querySelector('.decrease').addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotalPrice(price, quantityInput.value, totalPriceSpan);
            }
        });
    }

    // Показ поп-апа с корзиной
    document.getElementById('cart-popup').style.display = 'flex';
    // Обновление общей стоимости корзины
    updateCartTotal();
}

// Функция для обновления итоговой стоимости
function updateTotalPrice(price, quantity, totalPriceSpan) {
    totalPriceSpan.innerText = price * quantity;
}

// Функция для обновления итоговой стоимости всех товаров в корзине
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').value);
        const price = parseInt(item.querySelector('.total-price').innerText);
        total += quantity * price;
    });

    document.getElementById('total-cart-price').innerText = total;
}

// Закрытие поп-апа
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('cart-popup').style.display = 'none';
});

// Оформление заказа
document.getElementById('checkout').addEventListener('click', () => {
    alert('Заказ оформлен! Спасибо за покупку.');
    document.getElementById('cart-popup').style.display = 'none';
});

// Очистка корзины
document.getElementById('clear-cart').addEventListener('click', () => {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Очищаем корзину
    document.getElementById('total-cart-price').innerText = '0'; // Сбрасываем итоговую стоимость
});



const orderForm = document.getElementById('orderForm');
const notification = document.getElementById('notification');

// Обработчик события отправки формы
orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы (перезагрузку страницы)

    // Показываем уведомление
    notification.classList.remove('hidden');

    // Сбрасываем форму
    orderForm.reset();

    // Скрываем уведомление автоматически через 3 секунды
    setTimeout(function() {
        notification.classList.add('hidden');
    }, 10000);
});


document.querySelectorAll('.sign-up-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';
    });
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Вы записались на мастер-класс!');

    // Закрыть поп-ап после отправки
    document.getElementById('popup').style.display = 'none';

    // Очистить форму
    this.reset();
});
