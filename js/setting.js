const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const toDoFormElement = document.getElementById("todo-form");
const clock = document.getElementById("clock");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

let timeNow;
timeNow = parseInt(runClock());

function runClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}`;
  return hours;
}

function onLoginSubmit(e) {
  const username = loginInput.value;
  e.preventDefault();
  loginForm.classList.add(CLASS_HIDDEN);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
  toDoFormElement.classList.remove(CLASS_HIDDEN);
}

function paintGreeting(username) {
  switch (true) {
    case 11 >= timeNow >= 5:
      greeting.innerText = `Good Morning ${username}!`;
      break;
    case 15 >= timeNow >= 12:
      greeting.innerText = `Good afternoon ${username}!`;
      break;
    case 20 >= timeNow >= 16:
      greeting.innerText = `Good Evening ${username}!`;
      break;
    case 24 >= timeNow >= 21 || 4 >= timeNow >= 0:
      greeting.innerText = `Good Night ${username}!`;
      break;
    default:
      greeting.innerText = `Hello ${username}!`;
  }
  greeting.classList.remove(CLASS_HIDDEN);
}

function setting() {
  runClock();
  setInterval(runClock, 1000);
  if (savedUsername === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    toDoFormElement.classList.remove(CLASS_HIDDEN);
    paintGreeting(savedUsername);
  }
}

setting();
