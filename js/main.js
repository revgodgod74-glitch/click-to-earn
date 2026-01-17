let coins = Number(localStorage.getItem("coins")) || 0;
let power = 1;

updateUI();

function earn(){
coins += power;
save();
}

function boost(){
power = 2;
setTimeout(()=>power=1,10000);
}

function save(){
localStorage.setItem("coins", coins);
updateUI();
}

function updateUI(){
document.getElementById("coins").innerText="Coins: "+coins;
document.getElementById("bar").style.width=(coins%100)+"%";
document.getElementById("level").innerText="Level "+(Math.floor(coins/100)+1);
}

function playMusic(){
document.getElementById("bgMusic").play();
}

window.onload=()=>{
if(!localStorage.getItem("bonus")){
document.getElementById("bonusPopup").classList.add("show");
}
};

function claimBonus(){
coins+=20;
localStorage.setItem("bonus","yes");
document.getElementById("bonusPopup").classList.remove("show");
save();
}

document.addEventListener("mousemove",e=>{
let c=document.getElementById("cursor");
c.style.left=e.pageX+"px";
c.style.top=e.pageY+"px";
});
