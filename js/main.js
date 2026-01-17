let coins = 0;
let power = 1;

function earn() {
  coins += power;
  updateUI();
}

function boost() {
  power = 2;
  setTimeout(() => power = 1, 10000);
}

function updateUI() {
  document.getElementById("coins").innerText = "Coins: " + coins;
  document.getElementById("bar").style.width = (coins % 100) + "%";
  document.getElementById("level").innerText =
    "Level " + (Math.floor(coins / 100) + 1);
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

window.onload = () => {
  if (!localStorage.getItem("bonus")) {
    document.getElementById("bonusPopup").classList.add("show");
  }
};

function claimBonus() {
  coins += 10;
  localStorage.setItem("bonus", "yes");
  document.getElementById("bonusPopup").classList.remove("show");
  updateUI();
}

document.addEventListener("mousemove", e => {
  let c = document.getElementById("cursor");
  c.style.left = e.pageX + "px";
  c.style.top = e.pageY + "px";
});
