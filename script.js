document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");
  const registerContainer = document.getElementById("register-container");
  const loginContainer = document.getElementById("login-container");
  const secureContainer = document.getElementById("secure-container");
  const userNameElement = document.getElementById("user-name");
  const logoutButton = document.getElementById("logout-button");
  const showLoginLink = document.getElementById("show-login");
  const showRegisterLink = document.getElementById("show-register");

  // Show login form by default
  loginContainer.classList.add("active");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value;
    const age = document.getElementById("register-age").value;
    const mobile = document.getElementById("register-mobile").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (name && age && mobile && username && password) {
      const user = { name, age, mobile, password };
      localStorage.setItem(username, JSON.stringify(user));
      alert("User registered successfully!");
      registerForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        alert("Login successful!");
        loginContainer.classList.remove("active");
        registerContainer.classList.remove("active");
        secureContainer.style.display = "block";
        userNameElement.textContent = username;
      } else {
        alert("Invalid username or password.");
      }
    } else {
      alert("User not found.");
    }
  });

  logoutButton.addEventListener("click", () => {
    secureContainer.style.display = "none";
    loginContainer.classList.add("active");
    registerContainer.classList.remove("active");
  });

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.add("active");
    registerContainer.classList.remove("active");
  });

  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.classList.add("active");
    loginContainer.classList.remove("active");
  });
});
