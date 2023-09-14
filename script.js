let panel_bottom = document.querySelector('#panel_btm');
let timerVal = document.querySelector('#timerVal');
let hitVal = document.querySelector('#hitVal');
let scoreVal = document.querySelector('#scoreVal');
let time = 60;
let randomHit = 0;
let score = 0;

function makeBubble() {
  let bubbles = '';
  for (let i = 1; i <= 150; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  panel_bottom.innerHTML = bubbles;
}

function runningTimer() {
  let stopTimer = setInterval(() => {
    if (time > 0) {
      time--;
      timerVal.textContent = time;
    } else {
      clearInterval(stopTimer);
      panel_bottom.innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  randomHit = Math.floor(Math.random() * 10);
  hitVal.textContent = randomHit;
}

function increseScore() {
  scoreVal.textContent = score;
  score += 10;
}

panel_bottom.addEventListener('click', (e) => {
  if (Number(e.target.textContent) === randomHit) {
    increseScore();
    makeBubble();
    getNewHit();
  }
})

makeBubble();
runningTimer();
getNewHit();
increseScore();


