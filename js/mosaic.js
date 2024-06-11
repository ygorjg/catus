document.addEventListener("DOMContentLoaded", function () {
  fetch("components/mosaic.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("mosaic").innerHTML = data;
    });
});
