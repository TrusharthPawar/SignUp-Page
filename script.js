var password = document.getElementById("password");
var input = document.getElementById("user");
var btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  input.value === "" ? window.alert("Enter username") : console.log("ok");
  password.value === "" ? window.alert("Enter Password") : console.log("ok");
  if (password.textLength === 0) {
    console.log("enter details");
  } else if (password.textLength > 0) {
    password.textLength < 8
      ? window.alert("password contains atleast 8 charaters")
      : window.alert("Logged in Successfully");
  }
});
