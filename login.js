function validateLogin(username, password) {
  if (username.trim() === "") {
    return "Username is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  return "";
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  document.getElementById("error").textContent = validateLogin(username, password);
});
