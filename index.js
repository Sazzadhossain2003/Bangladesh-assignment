// section-1
let count = 0;
const loveCount = document.getElementById("love-count");
const loveIcons = document.getElementsByClassName("hardPng");
for (const icon of loveIcons) {
  icon.addEventListener('click', function () {
    count++;
    loveCount.textContent = count;
  });
}

// section-2
let coins = 100;
const coinDisplay = document.getElementById('coin-count');
const callButtons = document.querySelectorAll('.call-btn');
const callCost = 20;
const historyBox = document.querySelector(".mine-not");
const clearBtn = document.querySelector(".clearBtn"); 


for (const btn of callButtons) {
  btn.addEventListener('click', function() {
    const card = btn.closest('.bg-white');
    const title = card.querySelector("h2").innerText;
    const number = card.querySelector("h1").innerText;
    const description = card.querySelector("p").innerText;
    if (coins >= callCost) {
      coins -= callCost;
      coinDisplay.textContent = coins;

      
      alert(`${description} ${number}...`);

      const now = new Date();
      const time = now.toLocaleTimeString();

      
      const newLog = document.createElement("div");
      newLog.className = "flex justify-between items-center p-4 bg-gray-50 rounded-2xl mb-2";
      newLog.innerHTML = `
        <div>
          <h2 class="font-semibold text-[18px]">${title}</h2>
          <p>${number}</p>
        </div>
        <p>${time}</p>
      `;
       historyBox.appendChild(newLog);

    } else {
      alert('You don\'t have enough coins.');
    }
  });
}