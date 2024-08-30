let cart = [];
let cartCount = 0;
let cartTotal = 0.00;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    cartTotal += productPrice;
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').textContent = cartCount;
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

function toggleCart() {
    let cartSection = document.getElementById('cart');
    cartSection.classList.toggle('hidden');
}
