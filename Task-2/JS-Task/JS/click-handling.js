const btn = document.querySelector(".btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  body.style.backgroundColor = randomColor;
});
