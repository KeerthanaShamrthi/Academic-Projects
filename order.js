order.js
--------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".order-form form");
 
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent real form submission
 
      // Collect form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const foodItem = document.getElementById("food-item").value.trim();
      const quantity = document.getElementById("quantity").value.trim();
      const address = document.getElementById("address").value.trim();
 
      if (!name || !email || !phone || !foodItem || !quantity || !address) {
        alert("Please fill out all fields.");
        return;
      }
