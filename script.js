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

// Age counter: fixed to 27 per request (you can change to calculate from birthdate if desired)
function updateCounters(){
  const yearsEl = document.getElementById('years');
  yearsEl.textContent = 27; // set age to 27
  yearsEl.classList.add('sparkle');
}
updateCounters();

// Gallery images: expect photos to be copied into `selected/` inside the project.
const images = [];
for(let i=1;i<=20;i++) images.push(`selected/${String(i).padStart(2,'0')}.jpg`);
// Also keep the two OneDrive paths as fallback if you prefer absolute paths
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
    img.loading = 'lazy';
    img.addEventListener('click', ()=>openLightbox(src, `Memory ${i+1}`));
    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = 'Memory '+(i+1);
    div.appendChild(img);
    div.appendChild(cap);
    galleryGrid.appendChild(div);
  })
}
buildGallery();

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');

function openLightbox(src, caption){
  lbImg.src = src;
  lbCaption.textContent = caption || '';
  lightbox.setAttribute('aria-hidden','false');
}
function closeLightbox(){
  lightbox.setAttribute('aria-hidden','true');
  lbImg.src = '';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });

// Basic accessibility: keyboard support
celebrateBtn.addEventListener('keyup',(e)=>{ if(e.key==='Enter') celebrateBtn.click(); });
openCardBtn.addEventListener('keyup',(e)=>{ if(e.key==='Enter') openCardBtn.click(); });

