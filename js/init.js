const images = [
  "0.jpg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
];
let chosenImage;
const bgImage = document.createElement("img");
const icons = document.querySelectorAll("i");
const inputs = document.querySelectorAll("input[type=text]");
const submitBtn = document.getElementById("submitBtn");
const changeBgBtn = document.getElementById("changeBgBtn");
const Arr = document.getElementById("arrow");

function getBg() {
  chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${chosenImage}`;
  document.body.style.background = `url(img/${chosenImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

function showArr() {
  Arr.classList.remove("hidden");
}

function hideArr() {
  Arr.classList.add("hidden");
}

changeBgBtn.addEventListener("click", getBg);
changeBgBtn.addEventListener("mouseenter", showArr);
changeBgBtn.addEventListener("mouseleave", hideArr);

function handleLightBg() {
  document.body.style.color = "rgba(0,0,0,0.6)";
  inputs.forEach((input) => {
    input.classList.add("dark-input");
    input.style.setProperty("--c", "var(--black)");
  });
  submitBtn.classList.add("dark-button");
  changeBgBtn.style.color = "var(--black)";
}

function handleDarkBg() {
  document.body.style.color = "lavender";
}

function init() {
  getBg();
  if (
    chosenImage === "0.jpg" ||
    chosenImage === "1.jpeg" ||
    chosenImage === "2.jpeg" ||
    chosenImage === "3.jpeg" ||
    chosenImage === "4.jpeg" ||
    chosenImage === "5.jpeg"
  ) {
    handleLightBg();
  } else {
    handleDarkBg();
  }
}

init();
