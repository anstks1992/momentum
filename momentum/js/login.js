const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "myname";

function onLoginForm(e) {
  e.preventDefault();
  loginForm.classList.add(HiDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paingreeting(username);
}

function paingreeting(name) {
  greeting.innerHTML = `Hello ${name}`;
  greeting.classList.remove(HiDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginForm);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HiDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginForm);
} else {
  paingreeting(savedUsername);
}
