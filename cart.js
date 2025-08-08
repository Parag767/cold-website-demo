function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      const itemSubtotal = item.price * item.quantity;
      total += itemSubtotal;

      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="80" />
        <div>
          <h3>${item.name}</h3>
          <p>Size: ${item.size}</p>
          <p>Price: ₹${item.price}</p>

          <div class="quantity-controls">
            <button onclick="decreaseQuantity(${index})">−</button>
            <span>Qty: ${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
          </div>

          <p>Subtotal: ₹${itemSubtotal}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemDiv);
    });
  }

  document.getElementById("cart-total").textContent = total;
  updateCartCount();
}

function increaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function decreaseQuantity(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    // Optional: remove if quantity is 1 and user presses "–"
    if (confirm("Quantity is 1. Remove item from cart?")) {
      cart.splice(index, 1);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.textContent = `Cart 🛒 (${cart.length})`;
  }
}

// Initial render
displayCart();
