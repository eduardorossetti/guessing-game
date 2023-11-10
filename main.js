// variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let attempts = 1;
let randomNumber = Math.round(Math.random() * 10);

//function
const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const handleTryClick = (event) => {
  event.preventDefault(); // don't make the default
  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerHTML = `Congratulations! You got the number right "${inputNumber.value}" in ${attempts} attempts!`;
  }
  inputNumber.value = "";
  attempts++;
};

const handleResetClick = () => {
  toggleScreen();
  attempts = 1;
  randomNumber = Math.round(Math.random() * 10);
};

const keyEnter = (event) => {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

//events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", keyEnter);
