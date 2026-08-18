// Simple confetti using canvas-confetti (small inline impl)
function runConfetti(){
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 }
  const canvas = document.getElementById('confettiCanvas');
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
  (function frame(){
    const timeLeft = animationEnd - Date.now();
    if(timeLeft <= 0) return;
    const particleCount = 50 * (timeLeft / duration);
    myConfetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() * 0.6 } }));
    requestAnimationFrame(frame);
  }());
}

// include a tiny confetti lib if confetti is not available
(function(){
  if(window.confetti) return;
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  script.onload = ()=>console.log('confetti lib ready');
  document.head.appendChild(script);
})();

// Cake candle toggle
const cake = document.getElementById('cake');
cake.addEventListener('click', ()=>{
  cake.classList.toggle('extinguished');
});

// Celebrate button
const celebrateBtn = document.getElementById('celebrateBtn');
celebrateBtn.addEventListener('click', ()=>{
  if(window.confetti){ runConfetti(); }
  else{ runConfetti(); }
});

// Card flip
const card = document.getElementById('birthdayCard');
const openCardBtn = document.getElementById('openCardBtn');
card.addEventListener('click', ()=>card.classList.toggle('flipped'));
openCardBtn.addEventListener('click', ()=>card.classList.toggle('flipped'));

// Countdown/Age counter: simple example using birthdate
const birthdate = new Date(); // default: now (user can modify)
// For demonstration, set a sample birthdate - change as needed
birthdate.setFullYear(birthdate.getFullYear() - 25);

function updateCounters(){
  const now = new Date();
  const years = now.getFullYear() - birthdate.getFullYear();
  const days = Math.floor((now - birthdate)/(1000*60*60*24));
  document.getElementById('years').textContent = years;
  document.getElementById('days').textContent = days;
}
updateCounters();

// Gallery images: include provided images and attached ones (user-provided paths)
const images = [
  'selected/1.jpg',
  'selected/2.jpg',
  'selected/3.jpg',
  'selected/4.jpg',
  'selected/5.jpg',
  'selected/6.jpg'
];

// The user asked to use specific WhatsApp images. We'll reference local OneDrive paths if available.
const extra = [
  'c:/Users/mdhus/OneDrive/Pictures/love/WhatsApp Image 2026-08-16 at 10.28.42.jpeg',
  'c:/Users/mdhus/OneDrive/Pictures/love/WhatsApp Image 2026-08-16 at 10.28.41.jpeg'
];

const galleryGrid = document.getElementById('galleryGrid');
function buildGallery(){
  const all = images.concat(extra);
  all.forEach((src,i)=>{
    const div = document.createElement('div');
    div.className = 'grid-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Memory '+(i+1);
    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = 'Memory '+(i+1);
    div.appendChild(img);
    div.appendChild(cap);
    galleryGrid.appendChild(div);
  })
}
buildGallery();

// Basic accessibility: keyboard support
celebrateBtn.addEventListener('keyup',(e)=>{ if(e.key==='Enter') celebrateBtn.click(); });
openCardBtn.addEventListener('keyup',(e)=>{ if(e.key==='Enter') openCardBtn.click(); });

