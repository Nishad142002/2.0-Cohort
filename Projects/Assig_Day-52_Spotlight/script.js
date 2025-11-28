document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x-axis", `${e.clientX}px`);
  document.body.style.setProperty("--y-axis", `${e.clientY}px`);
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("clicked");
});
