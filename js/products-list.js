document.addEventListener("DOMContentLoaded", function () {
  fetch("components/products-list.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("products-list").innerHTML = data;

      const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
      addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const productContainer = button.closest(".product-container");
          const productName =
            productContainer.querySelector(".product-name").textContent;
          const productPrice =
            productContainer.querySelector(".product-price").textContent;
          const productImage = productContainer.querySelector(".product-image");

          addToCart(productName, productPrice, productImage.src);
        });
      });
    });
});
