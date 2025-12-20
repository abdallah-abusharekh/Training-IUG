const input = document.querySelector(".input");
const countBtn = document.querySelector(".count-btn");
const displayCount = document.querySelector(".display-count");

let query = "";

input.addEventListener("change", (e) => {
  query = e.target.value;
});

countBtn.addEventListener("click", () => {
  displayCount.textContent = `You've typed ${countChars(query)} characters`;
});

function countChars(q) {
  let count = 0;
  for (let i = 0; i < q.length; i++) {
    count++;
  }
  return count;
}
