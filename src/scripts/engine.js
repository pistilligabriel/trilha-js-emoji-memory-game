const emojis = [
  "🐱‍👤",
  "🐱‍👤",
  "😂",
  "😂",
  "👍",
  "👍",
  "👀",
  "👀",
  "🤦‍♂️",
  "🤦‍♂️",
  "🎶",
  "🎶",
  "🤷‍♂️",
  "🤷‍♂️",
  "❤",
  "❤",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;

  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (document.querySelectorAll(".boxMatch")) {
    console.log("Não pode selecionar essa carta!");
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else if (openCards[0].classList.contains(".boxMatch")) {
    console.log("Não é possível selecionar essa carta!");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Parabens, você venceu!");
  }
}
