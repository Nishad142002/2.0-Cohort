let sounds = {
  a: new Audio("./sounds/piano-c.wav"),
  w: new Audio("./sounds/piano-cc.wav"),
  s: new Audio("./sounds/piano-d.wav"),
  e: new Audio("./sounds/piano-eb.wav"),
  d: new Audio("./sounds/piano-e.wav"),
  f: new Audio("./sounds/piano-f.wav"),
  t: new Audio("./sounds/piano-ff.wav"),
  g: new Audio("./sounds/piano-g.wav"),
  y: new Audio("./sounds/piano-gg.wav"),
  h: new Audio("./sounds/piano-a.wav"),
  u: new Audio("./sounds/piano-bb.wav"),
  j: new Audio("./sounds/piano-b.wav"),
};

let scren = document.querySelector(".scren");
let speakers = document.querySelectorAll(".speaker");

let histryKey = "";

document.addEventListener("keydown", (event) => {
  let note = event.key;
  console.log(event.key);

  try {
    sounds[note].play();
    scren.textContent = histryKey + note;
    histryKey = scren.textContent;
    scren.style.color = "white";
    speakers.forEach((speaker) => {
      speaker.style.background = `conic-gradient(
        from 0deg,
        #ff0000,
        #ff8000,
        #ffff00,
        #00ff00,
        #00ffff,
        #0000ff,
        #ff00ff,
        #ff0000
      )`;

      setTimeout(() => {
        speaker.style.background = "transparent";
      }, 600);
    });
  } catch (error) {
    scren.textContent = scren.textContent + "X";
    scren.style.color = "red";
    console.log("You press wrong key");
  }
});
