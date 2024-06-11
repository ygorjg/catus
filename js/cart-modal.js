document.addEventListener("DOMContentLoaded", function () {
  fetch("components/cart-modal.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("cart-modal").innerHTML = data;

      const cartModal = document.getElementById("cart-modal");
      const closeModalBtn = document.querySelector(".close-btn");
      const cartIcon = document.querySelector(".cart-icon");

      closeModalBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
        document.body.classList.remove("cart-modal-open");
      });

      cartIcon.addEventListener("click", () => {
        cartModal.style.display = "block";
        document.body.classList.add("cart-modal-open");
      });

      cartModal.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-btn")) {
          const cartItem = event.target.closest(".cart-item");
          cartItem.remove();
        }
      });
    });
});

function addToCart(name, price, image) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <img src="${image}" alt="${name}" class="product-image-cart">
    <div class="product-details">
      <p class="product-name">${name}</p>
      <p class="product-price">${price}</p>
      <button class="remove-btn">Remover</button>
    </div>
  `;

  const cartModalContent = document.querySelector(".cart-modal-content");
  cartModalContent.appendChild(cartItem);
}
