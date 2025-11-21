const users = [
  {
    pic: "https://i.pinimg.com/736x/28/2d/f2/282df29c592fc83f709894d7d196cb46.jpg",
    username: "Alice_Coder",
    designation: "Software Engineer",
    description:
      "Full-stack developer (React/Node.js). Focuses on clean code and automation.",
  },
  {
    pic: "https://i.pinimg.com/736x/fa/98/66/fa9866258e313434a9d1f2480a7e73f8.jpg",
    username: "Bob_Designer",
    designation: "UX/UI Designer",
    description:
      "Creates intuitive user interfaces. Expertise in Figma and prototyping.",
  },
  {
    pic: "https://i.pinimg.com/736x/df/e1/d6/dfe1d6cd760b9c73a2dd0782843feba6.jpg",
    username: "Charlie_Manager",
    designation: "Project Manager",
    description:
      "Manages timelines, budget, and team coordination using Agile methods.",
  },
  {
    pic: "https://i.pinimg.com/1200x/fd/fc/bc/fdfcbcf311c0276d7bc7eedcc3db33d6.jpg",
    username: "Diana_Analyst",
    designation: "Data Scientist",
    description:
      "Develops predictive models and analyzes large datasets using Python and R.",
  },
  {
    pic: "https://i.pinimg.com/736x/1d/27/75/1d2775cc2620e06dea2c8d50495b43b4.jpg",
    username: "Ethan_Support",
    designation: "Technical Support",
    description:
      "Provides front-line support, troubleshooting, and resolves customer technical issues.",
  },
];

let main = document.querySelector("main");

function fetchUsers() {
  let userSum = "";

  users.forEach((user) => {
    userSum =
      userSum +
      `<div class="card">
        <div class="pic">
          <img
            src="${user.pic}"
            alt=""
          />
        </div>
        <div class="info">
          <h2 class="username">${user.username}</h2>
          <h3 class="desig">${user.designation}</h3>
          <p class="desc">${user.description}</p>
        </div>
      </div>`;
  });

  main.innerHTML = userSum;
}

fetchUsers();
