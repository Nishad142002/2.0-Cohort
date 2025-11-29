const cardsDetail = [
  {
    img: "./images/ironman.jpeg",
    title: "Iron Man",
    subTitle: "I am Iron man",
    shadow: "#811528",
    border: "#c9274b",
  },
  {
    img: "./images/doctorDoom.jpeg",
    title: "Doctor Doom",
    subTitle: "Failure is beneath Doooom",
    shadow: "#113E1E",
    border: "#93B254",
  },
  {
    img: "./images/blackPanther.jpeg",
    title: "Black Panther",
    subTitle: "Wankada Forever",
    shadow: "#6104DE",
    border: "#E26EF6",
  },
  {
    img: "./images/loki.jpeg",
    title: "Loki",
    subTitle: "For All Time. Always",
    shadow: "#014906",
    border: "#92D85A",
  },
];

let main = document.querySelector("main");

let allCard = "";

function createCards() {
  cardsDetail.map((card, idx) => {
    allCard =
      allCard +
      `<div class="card">
        <img src="${card.img}" alt="" />

        <div class="info">
          <h2>${card.title}</h2>
          <p>${card.subTitle}</p>
        </div>
      </div>`;

    document.body.style.setProperty("--shadow-color", card.shadow);
    document.body.style.setProperty("--border-color", card.border);
  });

  main.innerHTML = allCard;
}

createCards();

let cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card, idx) => {
  card.addEventListener("mouseover", () => {
    document.body.style.setProperty("--shadow-color", cardsDetail[idx].shadow);
    document.body.style.setProperty("--border-color", cardsDetail[idx].border);
  });
});
