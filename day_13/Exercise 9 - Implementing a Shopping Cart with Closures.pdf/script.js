const cart = {};

function addProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      cart[productId]++;
    } else {
      cart[productId] = 1;
    }
    updateCart();
  };
}

function updateCart() {
  const cartItemsDiv = document.querySelector(".cart-items");
  cartItemsDiv.innerHTML = "";
  for (const [productId, quantity] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `<p>Product ID: ${productId}</p><p>Quantity: ${quantity}</p>`;
    cartItemsDiv.appendChild(cartItemDiv);
  }
}

document.querySelectorAll(".product button").forEach((button) => {
  const productId = button.parentElement.getAttribute("data-id");
  button.addEventListener("click", addProductToCart(productId));
});
