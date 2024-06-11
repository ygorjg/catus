document.addEventListener("DOMContentLoaded", function () {
  fetch("components/products-list.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("products-list").innerHTML = data;
    });
});
