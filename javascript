// Prendiamo i bottoni dal DOM
const yesBtn = document.getElementById(‘yes’);
const noBtn = document.getElementById(‘no’);

// NO che scappa quando ci passi sopra
noBtn.addEventListener(‘mouseover’, () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = ‘absolute’;
  noBtn.style.left = x + ‘px’;
  noBtn.style.top = y + ‘px’;
});

// SÌ che cresce ogni volta che ci clicchi
yesBtn.addEventListener(‘click’, () => {
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 5) + ‘px’; // aumenta di 5px ad ogni click

  // Se diventa troppo grande, alert carino
  if (currentSize > 80) {
    alert(“Yeaaaah! Sei il mio Valentino! 💖😍”);
  }
});
