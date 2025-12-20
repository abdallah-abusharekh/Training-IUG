const input = document.querySelector(".input");
const checkBtn = document.querySelector(".check-btn");
const output = document.querySelector(".output");
const form = document.querySelector("form");

const secretNum = 5;
let guess = "";

input.addEventListener("change", (e) => {
  guess = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = checkGuessing(guess);
});

function checkGuessing(q) {
  let result = "";
  if (guess < 1 || guess > 10) result = "Not in the range!";
  else {
    if (guess > secretNum) result = "Too high";
    else if (guess < secretNum) result = "Too low";
    else result = "Correct 🥳";
  }
  return result;
}
