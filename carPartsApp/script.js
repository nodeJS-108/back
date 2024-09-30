const API_URL = "http://localhost:3000/api";

document
  .getElementById("register-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    alert(data.message || "Registration successful!");
  });

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      loadProducts();
    } else {
      alert(data.message || "Login failed!");
    }
  });

async function loadProducts() {
  const response = await fetch(`${API_URL}/parts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const products = await response.json();
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
    productList.appendChild(productElement);
  });
}

async function addToCart(productId) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first!");
    return;
  }

  const response = await fetch(`${API_URL}/orders/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });

  const data = await response.json();
  alert(data.message || "Product added to cart!");
}
