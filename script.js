let panel_bottom = document.querySelector('#panel_btm');

let bubbles = '';
// let randomNumber = 0;

for (let i = 1; i <= 150; i++){
  let randomNumber = Math.floor(Math.random()*10)
  bubbles += `<div class="bubble">${randomNumber}</div>`;
}

panel_bottom.innerHTML = bubbles;