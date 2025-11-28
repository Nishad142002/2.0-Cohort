const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

let text = "Welcome, This is Matrix Text Animation";
let stopMatrix = false;

const randomText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function matrix() {
  const str = text
    .split("")
    .map((char, idx) => {
      if (idx < iteration) {
        return char;
      }

      return randomText.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");

  if (stopMatrix) {
    iteration += 0.5;
  }

  if (text.length < iteration) {
    clearInterval(matrixInterval);
  }

  h1.innerText = str;
}

let matrixInterval;

btn.addEventListener("click", () => {
  matrixInterval = setInterval(matrix, 120);
  stopMatrix = true;
});
