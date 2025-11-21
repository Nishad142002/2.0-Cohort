let card = document.querySelector(".card");
let like = document.querySelector("#like");

card.addEventListener("dblclick", function () {
  like.style.transform = "scale(1) rotate(0deg)";
  setTimeout(() => {
    like.style.transform = "translateY(-390%) scale(1) rotate(0deg)";
  }, 500);

  setTimeout(() => {
    like.style.transform = "scale(0) rotate(40deg) translateY(0)";
  }, 750);
});
